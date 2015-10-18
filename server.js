'use strict';
import Koa from 'koa'
import path from 'path'
import router from 'koa-router'
import serve from 'koa-static'
import r from 'rethinkdb'
import http from 'http'
import request from 'superagent'
import bodyParser from 'koa-body';
import SocketIO from 'socket.io'
import webpack from 'webpack'

import * as eventService from './server/api/api.js'
import config from './webpack.config'

const myBodyParser = bodyParser();
const myRouter = router();
const app = Koa();
const compiler = webpack(config);
const httpServer = http.Server(app.callback());
const port = process.env.PORT || 8000;

let io = SocketIO(httpServer)

//serve up new builds
app.use(require('koa-webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//spit out new builds
app.use(require('koa-webpack-hot-middleware')(compiler));

app.use(serve(path.resolve('client')));

myRouter
    .get('/api', function *(next) {
        this.body = yield eventService.getPosts();
    })
    .post('/api/post', myBodyParser, function *(next) {
        let body = this.request.body;
        let tags;

        request
            .get(`https://api.clarifai.com/v1/tag/?url=${body.url}&access_token=swsia18bGbnWjUYYlSrMOD1jjaNMLu`)
            .end((err, res) => {
                tags = res.body.results[0].result.tag.classes;
                eventService.addPost(body.caption, tags, body.url, body.user);
            })
        this.status = 200;
        this.body = "it posted"
    })

    .put('/api/post/:id', myBodyParser, function *(next) {
        //let body = this.request.body;
        //
        //this.params.id
        //this.status = 200;
        //this.body = "it updated"
        //
        //request
        //    .post(`https://api.clarifai.com/v1/tag/?url=${body.url}&access_token=swsia18bGbnWjUYYlSrMOD1jjaNMLu`)
        //    .end((err, res) => {
        //        tags = res.body.results[0].result.tag.classes;
        //        eventService.addPost(body.caption, tags, body.url, body.user);
        //    })
        //
        //eventService.updatePost(this.params.id, body.comments, body.tags);
    })

app
    .use(myRouter.routes())
    .use(myRouter.allowedMethods());

httpServer.listen(port, () => {
    console.log('App is listening on port', port);
});

//sets up live updating
eventService.liveUpdates(io);

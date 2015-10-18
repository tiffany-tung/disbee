import React from 'react'
import ReactDOM from 'react-dom';
import request from 'superagent';
import Post from './post.es6.js';
import Root from './containers/Root'
import setUpRealtime from './Realtime.es6.js'

ReactDOM.render(<Root />, document.getElementById('container'));

request
    .post('/api/post')
    .send({ user: 'Manny', url: 'https://www.petfinder.com/wp-content/uploads/2012/11/140272627-grooming-needs-senior-cat-632x475.jpg',
    caption: "wat dis"})
    .end((err, res) => {
        console.log(res);
    });

setUpRealtime();
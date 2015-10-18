import r from 'rethinkdb'
import config from '../config.json'

function connect() {
    return r.connect(config);
}

export function liveUpdates(io) {
    console.log('Setting up live updates...');
    connect()
    .then((conn) => {
        r
        .table('posts')
        .changes().run(conn, (err, cursor) => {
            console.log('Listening for changes...')
            cursor.each((err, change) => {
                console.log('Change detected', change)
                if(change.old_val){
                    io.emit('updated-post', change)
                } else {
                    io.emit('new-post', change)
                }
            })
        })
    })
}

export function getPosts() {
    return connect()
        .then((conn) => {
            return r
                .table('posts').run(conn).then(cursor => cursor.toArray())
        })
}

export function addPost(caption, tags, url, user) {
    return connect()
        .then((conn) => {
             r
                .table('posts').insert([{
                    url,
                    user,
                    caption,
                    tags,
                     comments: []
                }]).run(conn)
        })
}

export function updatePost(id, comments, tags) {
    connect()
        .then((conn) => {
            r
                .table('posts').get(id).update({
                    comments,
                    tags
                }).run(conn)
        })
}

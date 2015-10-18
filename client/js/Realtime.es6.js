import socketClient from 'socket.io-client';

export default function setupRealtime(store, actions) {
    const io = socketClient();

    io.on('new-post', (change) => {
        //update ui
        console.log("new post");
        console.log(change);
        store.dispatch(actions.addPost(change.new_val));

    });

    io.on('updated-post', (change) => {
        console.log('updated post');
        console.log(change);
    });

    return io;
}
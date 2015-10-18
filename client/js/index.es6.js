import React from 'react'
import ReactDOM from 'react-dom';
import Post from './post.es6.js';
import Root from './containers/Root'
import setUpRealtime from './Realtime.es6.js'

ReactDOM.render(<Post />, document.getElementById('container'));

setUpRealtime();
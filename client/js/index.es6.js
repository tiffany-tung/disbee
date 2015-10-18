import React from 'react'
import ReactDOM from 'react-dom';

import Root from './containers/Root'
import setUpRealtime from './Realtime.es6.js'

let injectTapEventPlugin = require("react-tap-event-plugin");


injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('container'));

setUpRealtime();
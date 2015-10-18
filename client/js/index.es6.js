import ReactDOM from 'react-dom';
import request from 'superagent';
import Post from './post.es6.js';
import setUpRealtime from './Realtime.es6.js'

import React, { Component, PropTypes } from 'react'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './containers/App'
import Reducer from './reducers/reducer'
import * as actions from './actions/actions'

const finalCreateStore = compose(
    applyMiddleware(thunk)
    //devTools()
)(createStore);

const store = finalCreateStore(Reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('container'));

setUpRealtime(store, actions);
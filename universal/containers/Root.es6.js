import React, { Component, PropTypes } from 'react'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './App.es6'
import Reducer from '../reducers/reducer'

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
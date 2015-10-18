import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable'

import * as actions from '../actions/actions'

import Sample from 'components/Sample'

class App extends Component {
    render() {

        console.log(this.props);
        const { dispatch, ...other } = this.props;

        const boundActions = bindActionCreators(actions, dispatch);

        return (
            <div style={STYLES}>
                <Sample />
            </div>
        )
    }
}

App.propTypes = {};

function mapStateToProps(state) {
    return {
        post    : state.get('posts').toJS(),
        loading : state.get('loading')
    };
}

const STYLES = {};

export default connect(mapStateToProps)(App);

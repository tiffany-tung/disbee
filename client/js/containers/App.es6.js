import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable'
import * as MUI from 'material-ui'
import Image from '../image.es6.js';
import Overlay from '../overlay.es6.js';

const RaisedButton = MUI.RaisedButton
const Paper = MUI.Paper;
const GridList = MUI.GridList;
const GridTile = MUI.GridTile;

const paperStyle = {
    backgroundColor: "#00bcd4",
    height: 64,
    right: 0,
    top: 0,
    width: "100%",
    zIndex: 4,
    margin: 0
}

import * as actions from '../actions/actions'

import Sample from 'components/Sample'
import ReactDOM from 'react-dom'
import Post from '../post.es6.js';

const Dialog = MUI.Dialog; 

class App extends Component {
    constructor(props) {
        super();
        this.createImageNodes = this.createImageNodes.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(result, counter) {
        const { dispatch } = this.props;
        const boundActions = bindActionCreators(actions, dispatch);
        boundActions.openPost(counter);
    }

    // Get all the current posts and render images based off of them
    createImageNodes() {

        let things = this.props.post.map((result, index) => {
            let len = result.comments ? result.comments.length : 0
            return (<GridTile onClick={() => this.handleOnClick(result, index)}
                        key={index}
                        title={result.caption + " - " + result.user} 
                        subtitle={"Top tag: " + result.tags[0] + " | Comments: " + len}>
                        <Image src={result.url} />
                    </GridTile>)
        })
        
        return things;
    }

    componentWillMount() {
        const { dispatch } = this.props;
        const boundActions = bindActionCreators(actions, dispatch);
        boundActions.getPosts();
        console.log('hererrrrr');
    }

    render() {
        console.log(this.props)
        const { dispatch, ...other } = this.props;

        const boundActions = bindActionCreators(actions, dispatch);

        let gridNodes = this.createImageNodes();


        let openPost = this.props.openPost != -1 ?
            <Overlay onClick={() => {
                    boundActions.closePost()
                }
            }>
            </Overlay>
            : null;

        return (    
        <div>
            <Paper style={paperStyle}>
                <h2>The fuck is that??</h2>
            </Paper>


            <GridList cols={window.innerWidth < 800 ? 1 : 3} cellHeight={400} >
                {gridNodes}
            </GridList>

        </div>);
        
    }
}

App.propTypes = {};

function mapStateToProps(state) {
    return {
        post    : state.get('posts').toJS(),
        loading : state.get('loading'),
        openPost: state.get('openPost')
    };
}

const STYLES = {};

export default connect(mapStateToProps)(App);

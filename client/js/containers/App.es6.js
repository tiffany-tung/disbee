import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable'
import * as MUI from 'material-ui'
import Image from '../image.es6.js';

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
    
class App extends Component {
    constructor(props) {
        super();
        this.state = {
            isMobile: window.innerWidth < 800
        }
        this.uploadMe = this.uploadMe.bind(this);
        this.createImageNodes = this.createImageNodes.bind(this);
        this.render = this.render.bind(this);
    }

    handleOnClick() {
        console.log("wasdfajiowjrfoaij");
    }

    // Get all the current posts and render images based off of them
    createImageNodes() {
        let things = this.props.post.map((result) => {
            return (<GridTile title={result.caption + " - " + result.user}><Image src={result.image_url} /></GridTile>)
        })
       
        
        return things;
    }

    uploadMe() {
        console.log(this.refs.hi.files)
        // POST TO S3
        // DO THE CLARIFI
    }

    render() {
        const { dispatch, ...other } = this.props;

        const boundActions = bindActionCreators(actions, dispatch);

        let gridNodes = this.createImageNodes();
        
        return (    
        <div>
            <Paper style={paperStyle}>
                <h2>The fuck is that?</h2>
            </Paper>
            
            <GridList onClick={this.handleOnClick} cols={this.state.isMobile ? 1 : 3} cellHeight={400} >
                {gridNodes}
            </GridList>

        </div>);
        
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

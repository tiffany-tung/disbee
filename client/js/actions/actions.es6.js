import { ADD_POST, SET_POSTS, TOGGLE_LOADING, OPEN_POST, CLOSE_POST } from '../constants/constants'
import Immutable from 'immutable'
import request from 'superagent'

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        posts
    }
}

export function toggleLoading() {
    return {
        type: TOGGLE_LOADING
    }
}

export function openPost(index) {
    return {
        type: OPEN_POST,
        index
    }
}

export function closePost() {
    return {
        type: CLOSE_POST
    }
}

export function thunk(blah) {
    return (dispatch, getState) => {
        //do stuff
    }
}

export function getPosts() {
    return (dispatch, getState) => {
        request
            .get(`/api`)
            .end((err, res) => {
                console.log(res.body);
                dispatch(setPosts(res.body));
            })
    }
}
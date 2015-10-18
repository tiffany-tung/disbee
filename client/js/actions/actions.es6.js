import { ADD_POST, SET_POSTS, TOGGLE_LOADING } from '../constants/constants'
import Immutable from 'immutable'

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function setPosts(posts) {
    return {
        type: ADD_POST,
        posts
    }
}

export function toggleLoading() {
    return {
        type: TOGGLE_LOADING
    }
}

export function thunk(blah) {
    return (dispatch, getState) => {
        //do stuff
    }
}
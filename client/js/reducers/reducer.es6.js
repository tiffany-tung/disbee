import { ADD_POST, SET_POSTS, TOGGLE_LOADING } from '../constants/constants'
import Immutable from 'immutable'

//beginning state of app
let post = {
    image_url: "http://i.imgur.com/xCxq8e3.jpg",
    caption: "Wtf is this?",
    user: "John",
    tags: ["Cat", "Dog", "Animal", "Red", "What"],
    comments: [{username: "Bob", comment: "This is a dog"}, {username: "Jane", comment: "This is a rat"}]
}
let initialState = Immutable.Map({
    posts: Immutable.List([post, post, post, post]),
    loading: false
});

export default function app(state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return state.update('posts', (posts) => {
                return posts.push(action.post);
            });

        case SET_POSTS:
            return state.set('posts', Immutable.List(action.posts))

        case TOGGLE_LOADING:
            return state.update('loading', (loading) => {
                return !loading;
            });

        default:
            return state;
    }
}
import { ADD_POST, SET_POSTS, TOGGLE_LOADING, OPEN_POST, CLOSE_POST } from '../constants/constants'
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
    loading: false,
    openPost: -1
});

export default function app(state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return state.update('posts', (posts) => {
                return posts.push(action.post);
            });

        case SET_POSTS:
            console.log('here motherfucka')
            return state.set('posts', Immutable.List(action.posts))

        case TOGGLE_LOADING:
            return state.update('loading', (loading) => {
                return !loading;
            });

        case OPEN_POST:
            return state.set('openPost', action.index)

        case CLOSE_POST:
            return state.set('openPost', -1);

        default:
            return state;
    }
}
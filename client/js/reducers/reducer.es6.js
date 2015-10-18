import { ADD_POST, SET_POSTS, TOGGLE_LOADING } from '../constants/constants'
import Immutable from 'immutable'

//beginning state of app
let post = {
    image_url: "http://cdn.playbuzz.com/cdn/0079c830-3406-4c05-a5c1-bc43e8f01479/7dd84d70-768b-492b-88f7-a6c70f2db2e9.jpg",
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
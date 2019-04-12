import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import users from './reducers/users';
import posts from './reducers/posts';

const stateLS = localStorage.getItem('state');
const initState = stateLS ? JSON.parse(stateLS) : {};

export default createStore(
    combineReducers({
        users,
        posts
    }),
    initState,
    applyMiddleware(thunk)
)
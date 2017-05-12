import {combineReducers} from "redux";

import {postFetch} from './buzz.reducers';
import {userFetch} from './users.reducers';

export  const reducers = combineReducers({
    postFetch,
    userFetch
})


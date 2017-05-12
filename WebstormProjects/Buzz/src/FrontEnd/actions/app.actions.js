import {
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    POST_BUZZ_STARTED,
    POST_BUZZ_SUCCESS,
    POST_BUZZ_FAILED,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILED,
    LIKE_POST_STARTED,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILED,
    DISLIKE_POST_STARTED,
    DISLIKE_POST_SUCCESS,
    DISLIKE_POST_FAILED
} from './../config/config.constants'

export function apiCallStarted() {
    return { type:FETCH_USER_STARTED };
}

export function apiCallSuccess(user) {
    console.log(user,"inside action..............................")
    return { type:FETCH_USER_SUCCESS,user };
}

export function apiCallFailed(err) {
    return { type:FETCH_USER_FAILED,err };
}

export function postBuzzCallStarted() {
    return { type:POST_BUZZ_STARTED };
}

export function postBuzzCallSuccess(postBuzz) {
    return { type:POST_BUZZ_SUCCESS,postBuzz };
}

export function postBuzzCallFailed(err) {
    return { type:POST_BUZZ_FAILED,err }
}

export function fetchPostCallStarted() {
    return { type:FETCH_POST_STARTED };
}

export function fetchPostCallSuccess(postBuzz) {
    return { type:FETCH_POST_SUCCESS,postBuzz };
}

export function fetchPostCallFailed(err) {
    return { type:FETCH_POST_FAILED,err}
}

export  function likePostStarted() {
    return { type:LIKE_POST_STARTED }
}

export  function likePostSuccess(likes) {
    return { type:LIKE_POST_SUCCESS,likes }
}

export  function likePostFailed(err) {
    return { type:LIKE_POST_FAILED,err }
}

export  function dislikePostStarted() {
    return { type:DISLIKE_POST_STARTED }
}

export  function dislikePostSuccess(dislikes) {
    return { type:DISLIKE_POST_SUCCESS,dislikes }
}

export  function dislikePostFailed(err) {
    return { type:DISLIKE_POST_FAILED,err }
}
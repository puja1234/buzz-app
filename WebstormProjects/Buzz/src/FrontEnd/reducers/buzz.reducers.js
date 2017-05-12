import {
    POST_BUZZ_STARTED,
    POST_BUZZ_SUCCESS,
    POST_BUZZ_FAILED,
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILED,
    FETCH_USER_STARTED,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    LIKE_POST_STARTED,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILED,
    DISLIKE_POST_STARTED,
    DISLIKE_POST_SUCCESS,
    DISLIKE_POST_FAILED
} from '../config/config.constants'

const initialState ={

    buzz : [],
    loading:false,
    err:null
}

export const postFetch = (state=initialState,action) => {

    switch (action.type){

        case POST_BUZZ_STARTED:{
            console.log("buzz started in reducer")
            return{
               ...state,
                loading:true,
            }
        }

        case POST_BUZZ_SUCCESS :{
            console.log("buzz success in reducer")
            const newPosts = state.buzz.concat(action.postBuzz)
            return{
                ...state,
                loading:false,
                buzz:newPosts,
            }
        }

        case POST_BUZZ_FAILED:{
            console.log("buzz error in reducer")
            return {
                ...state,
                loading : false,
                err: action.err,

            }
        }

        case FETCH_POST_STARTED:{
            console.log("buzz started in reducer")
            return{
                ...state,
                loading:true,
            }
        }

        case FETCH_POST_SUCCESS:{
            console.log("buzz started in reducer")
            const newPosts = state.buzz.concat(action.postBuzz)
            return{
                ...state,
                loading:false,
                buzz:newPosts,
            }
        }

        case FETCH_POST_FAILED:{
            console.log("buzz error in reducer")
            return {
                ...state,
                loading : false,
                err: action.err,

            }
        }
    }
    return state;
}
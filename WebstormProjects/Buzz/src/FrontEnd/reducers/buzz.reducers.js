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

        case LIKE_POST_STARTED: {
            console.log(state.buzz,'+++++++++++')
            console.log("like post in reducer started")
            return {
                ...state,
            }
        }

        case LIKE_POST_SUCCESS : {
            let i=0;
            console.log("like post in reducer success")
           for(i=0;i<state.buzz.length-1;i++){
               if(state.buzz[i]._id === action.likes._id){
                   if(action.likes.category==='like'){
                       let j=0;
                       for(j=0;j<state.buzz[i].likes.length-1;j++){
                           state.buzz[i].likes[j]=action.likes.likes[j];
                       }
                   }else{
                       let j=0;
                       for(j=0;j<state.buzz[i].dislike.length-1;j++){
                           state.buzz[i].dislike[j]=action.likes.dislike[j];
                       }
                   }

                }
           }
           console.log(state.buzz,'???????????????????')
             return{
                ...state,
                buzz:state.buzz
            }
        }

        case LIKE_POST_FAILED: {
            console.log("like post in reducer")
            return {
                ...state,
                err: action.err,
            }
        }
    }
    return state;
}
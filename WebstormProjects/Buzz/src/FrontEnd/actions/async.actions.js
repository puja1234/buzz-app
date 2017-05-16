import {
    apiCallStarted,
    apiCallSuccess,
    apiCallFailed,
    postBuzzCallStarted,
    postBuzzCallSuccess,
    postBuzzCallFailed,
    fetchPostCallStarted,
    fetchPostCallSuccess,
    fetchPostCallFailed,
    likePostStarted,
    likePostSuccess,
    likePostFailed,
    dislikePostStarted,
    dislikePostSuccess,
    dislikePostFailed
}from './app.actions'

import fetch from 'isomorphic-fetch';

export const asyncActionFetchUserDetail = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(apiCallStarted()); // call started
        fetch('http://localhost:3000/User',{
            credentials : 'include'
        }).then(response => response.json())
            .then(data => {
                console.log(data, "data");
                dispatch(apiCallSuccess(data));
            })
            .catch(err => {
                dispatch(apiCallFailed(err));		// failure
            });
    }
};

export const asyncActionPostBuzz = (postData) => {
 console.log('********post buzz async********',postData)
   return (dispatch) => { // this is store's dispatch method
            dispatch(postBuzzCallStarted()); // call started
            fetch('http://localhost:3000/Buzz', {
                method: 'post',
                body:postData,
            })
                .then(response => response.json())
                .then(data => {
                    dispatch(postBuzzCallSuccess(data)); 	// success
                })
                .catch(err => {
                    dispatch(postBuzzCallFailed(err));		// failure
                });
   }

}

export const asyncActionGetBuzz = () => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(fetchPostCallStarted()); // call started
        fetch('http://localhost:3000/Buzz', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchPostCallSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(fetchPostCallFailed(err));		// failure
            });
    }

}

export const asyncActionGetSpecificBuzz = (email) => {
    return (dispatch) => { // this is store's dispatch method
        dispatch(fetchPostCallStarted()); // call started
        fetch('http://localhost:3000/api/UserSpecificPost', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(email)
        })
            .then(response => response.json())
            .then(data => {
                dispatch(fetchPostCallSuccess(data)); 	// success
            })
            .catch(err => {
                dispatch(fetchPostCallFailed(err));		// failure
            });
    }

}

export const asyncLikes = (userLikePost) => {
    return (dispatch) => {
       dispatch(likePostStarted());
       fetch('http://localhost:3000/api/likeDislike',{
           credentials: 'include',
           method: 'put',
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           },
           body:JSON.stringify({userLikePost}) ,
       })
           .then(response => response.json())
           .then((data) => {
               console.log('>>>>>>>>>>>>>>>>>step 1................n');
               dispatch(likePostSuccess(data))
           })
           .catch(err => {
               dispatch(likePostFailed(err));
           })
   }
}

// export const asyncComment = () => {
//     return (dispatch) => {
//         dispatch(commentStarted());
//     }
// }


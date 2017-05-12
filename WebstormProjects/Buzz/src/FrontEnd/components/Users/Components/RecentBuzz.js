import React,{Component} from 'react'
import get from 'lodash/get';

import like from '../../../assets/images/like.png'
import dislike from '../../../assets/images/dislike.png'
import '../../../assets/styling/RecentBuzz.css'
import { asyncActionGetBuzz,asyncLikes } from '../../../actions'



export default class RecentBuzz extends Component{
    componentWillMount(){
     this.props.ReduxProps.dispatch(asyncActionGetBuzz());

    }
    
    // incrementLikes = (email,postID) =>{
    //     let userLikePost = {
    //         user_email:email,
    //         postID:postID
    //     }
    //     this.props.ReduxProps.dispatch(asyncLikes(userLikePost));
    // }
    // incrementDislikes = () =>{
    //     this.props.ReduxProps.dispatch(asyncDislikes());
    // }

    render(){
        let index = 0;
        const recent_buzz = this.props.ReduxProps.postFetch.buzz;

       console.log("content in buzz....................",recent_buzz);
        const email = get(this.props.ReduxProps.userFetch, 'users.email');
        return(

                <div className="recentBuzz">
                    <p className="caption">Recent Buzz</p>
                    {recent_buzz.slice(0).reverse().map((items)=>(
                        <div key={index++} className="recent-buzz-body">
                          <div className="posts">
                                <img className="user_imageurl" src={items.user_imageURL}/>
                                <span className="user_email">{items.user_email}</span>
                                <div className="category">{items.category}</div>
                              {items.imageUpload ?
                                  <img src={"http://localhost:3000/files/"+items.imageUpload} className="posted-image"/>:
                                  <div></div>
                              }

                                <p>
                                    {items.content}
                                </p>
                                <div className="recentBuzz-footer">
                                    <div className="like-dislike" ><img src={like}/></div>
                                    <div className="like-dislike" ><img src={dislike}/></div>
                                    <textarea placeholder="comment" className="comment"></textarea>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}


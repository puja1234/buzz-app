import React,{Component} from 'react'
import get from 'lodash/get';

import like from '../../../assets/images/like.png'
import dislike from '../../../assets/images/dislike.png'
import '../../../assets/styling/RecentBuzz.css'
import { asyncActionGetBuzz,asyncLikes } from '../../../actions'



export default class RecentBuzz extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:''
        }
    }
    componentWillMount(){
     this.props.ReduxProps.dispatch(asyncActionGetBuzz());

    }

    likeDislike = (email,postID,category) =>{
        let userLikePost = {
            user_email:email,
            postID:postID,
            choice:category
        }
        console.log("inside likeDislike on button click",userLikePost);
        this.props.ReduxProps.dispatch(asyncLikes(userLikePost));
    };

    writeComment = (event) => {
        this.setState({
            comment:event.target.value
        })
    };

    submitComment = (email,postId) => {
        let comment = {
            user_email:email,
            postId:postId,
            content:this.state.comment
        }
        console.log("comment to be submitted is :",comment);
        this.props.dispatch(asyncComment(comment));
    };

    render(){
        let index = 0;
        let startIndex = 0;

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
                                    <span className="likecount">{items.likes.length}</span>
                                    <button className="like-dislike" onClick={this.likeDislike.bind(this,email,items._id,'like')}><img src={like}/></button>
                                    <span className="dislikecount">{items.dislike.length}</span>
                                    <button className="like-dislike" onClick={this.likeDislike.bind(this,email,items._id,'dislike')}><img src={dislike}/></button>
                                    <textarea placeholder="comment"
                                              className="comment"
                                              maxLength="200"

                                              value={this.state.comment} >
                                    ></textarea>

                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}


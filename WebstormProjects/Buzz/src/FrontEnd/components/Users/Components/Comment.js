import React,{Component} from 'react'
import {asyncComment} from '../../../actions';
import get from 'lodash/get';

export default class Buzz extends Component{
    constructor(props){
        super(props);
        this.state = {
            comment:''
        }
        }

    writeComment = (event) => {
        this.setState({
            comment:event.target.value
        })
    };

    submitComment = (email,userImage,buzzId) => {
        let comment = {
            userEmail:email,
            postId:buzzId,
            user_Profile:userImage,
            content:this.state.comment
        }
        this.setState({
            comment:''
        })

        console.log("comment to be submitted is :",comment);
        this.props.ReduxState.dispatch(asyncComment(comment));
    };

        render(){
            console.log(this.props.userImage,"image of person who commented")
            return(
            <div>
                <textarea placeholder="comment"
                  className="comment"
                  maxLength="200"
                  onChange={this.writeComment.bind(this)}
                  value={this.state.comment}
                ></textarea>
                <button onClick={this.submitComment.bind(this,this.props.email,this.props.userImage,this.props.buzzID)}>Submit</button>
            </div>
        )
        }
    }
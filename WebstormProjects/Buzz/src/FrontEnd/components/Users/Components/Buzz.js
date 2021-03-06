import React,{Component} from 'react'
import get from 'lodash/get';
import '../../../assets/styling/Home.css'
import edit from '../../../assets/images/edit.png'
import {asyncActionPostBuzz} from '../../../actions'

export default class Buzz extends Component{
    constructor(props){
        super(props);
        this.state={
            postData:{

            },
            buzz:'',
            image:'',
            actionType:'Activity',
            posted_by:'',
            posted_by_image:'',
            err:'',
            imagePreviewUrl:''
        }
    }

     upload() {
        document.getElementById('clickMe').click();
    };

    onBuzzChange(event){
        this.setState({buzz:event.target.value});

    }

    onActionSelect(event){
        this.setState({actionType:event.target.value})
    }

   addBuzz(){
        if(this.state.buzz === '' && this.state.image === ''){
            this.setState({err:'Post cannot be empty'})
        }else {
            const email = get(this.props.ReduxProps.userFetch, 'users.email');
            const image = get(this.props.ReduxProps.userFetch, 'users.imageURL');
            var newData = {
                buzz: this.state.buzz,
                actionType: this.state.actionType,
                posted_by: email,
                posted_by_image: image,
            }
            let formData = new FormData();
            var data = JSON.stringify(newData)
            formData.append('buzzdata', data)
            formData.append("image", this.state.image);
            this.setState({
                postData: newData,
                err:'',
                buzz: '',
                image: '',
                imagePreviewUrl:''
            }, function () {
                console.log(this.state.postData);
                this.props.ReduxProps.dispatch(asyncActionPostBuzz(formData));
            });
        }
   }


    imageUpload = (event) => {
       var fileName = event.target.files[0].name;
       var extension = fileName.split('.').pop();
       console.log(extension,'++++++++++++++++++++++')
        if(extension == 'png' || extension=='jpg' || extension == 'jpeg' || extension == 'gif') {
            this.setState({
                image: event.target.files[0]
            });

            let reader = new FileReader();
            let file = event.target.files[0];

            reader.onloadend = () => {
                console.log('image in reader',reader.result)
                this.setState({
                    imagePreviewUrl: reader.result
                }, function(){
                    console.log("image selected is",this.state.image)
                });
            }

            reader.readAsDataURL(file);
        }

        else {
           alert("Please upload image only")
            this.setState({
                image: ''
            });
        }



    };

    render(){
        return(

             <div className="buzz-body">
                 <div className="wrapper">
                     <div className="header"> <img src={edit}  /> Create Buzz</div>
                     <textarea rows="10" cols="100"
                               placeholder="create a buzz (Max 500 characters)"
                               className="buzz-details"
                               maxLength="500"
                               onChange={this.onBuzzChange.bind(this)}
                               value={this.state.buzz} ></textarea>

                     <div className="buzz-footer">

                     <div className="dropdown">
                         <select
                             className="dropbtn"
                             title="Select a category of your buzz"
                             onChange={this.onActionSelect.bind(this)}
                         >Activity
                             <option>Activity</option>>
                             <option>Lost and Found</option>
                         </select>
                     </div>



                         <form encType="multipart/form-data">
                             <input ref="file" type="file" name="file" onChange={this.imageUpload} />
                         </form>


                         <button className="submit-buzz" onClick={this.addBuzz.bind(this)}>Submit</button>
                     </div>
                 </div>
                 <div className="imagePreview">
                    <img src={this.state.imagePreviewUrl}/>
                 </div>
                 <div className="errorBuzz">
                 {this.state.err}
                 </div>
            </div>
        )
    }
}



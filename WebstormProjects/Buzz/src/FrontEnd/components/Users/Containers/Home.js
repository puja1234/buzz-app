import React,{Component} from 'react'
import get from 'lodash/get';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import BuzzHeader from '../../../assets/images/BuzzHeader.jpg'
import logo from'../../../assets/images/to_the_new.jpg'
import '../../../assets/styling/Home.css'
import Complaints from '../Components/Complaints'
import Buzz from '../Components/Buzz'
import RecentBuzz from '../Components/RecentBuzz'
import {asyncActionFetchUserDetail} from '../../../actions'
import About from '../Components/About'

class Home extends Component{

    constructor(){
        super();
        this.state={
            showBuzz:true,
            showPosts:false
        }
    }

    componentWillMount(){
        this.props.dispatch(asyncActionFetchUserDetail());
    }
    showComplaintComponent(){
        this.setState({showBuzz:false})
    }
    showBuzzComponent(){
        this.setState({showBuzz:true})
    }
    showPostsComponent(){
        this.setState({showPosts:true})
    }

    render(){

        const email = get(this.props.userFetch, 'users.email');
        const image = get(this.props.userFetch, 'users.imageURL');
        console.log(email, image);
        return(
            <div className="mainContainer">

                <a href="/api/logout" className="logoutContainer">Logout</a>

                <div className="headerContainer">
                    <img className="Header" src={BuzzHeader}/>
                    <div className="textOnBanner">
                        <p>CREATING BUZZ AROUND YOU</p>
                        <p>NEVER BEEN SO EASY..</p>
                   </div>
                </div>

                <div className="logoToTheNewContainer">
                    <img className="logoToTheNew" src={logo}/>
                </div>

              <div className="navbar">
                 <img className="userimage" src={image}/>
                  <div className="userEmail">{email}</div>
                <div className="wrapper">

                    <ul className="main-menu">
                        <li> <a onClick={this.showBuzzComponent.bind(this)}> Home <span>&#10095;</span></a> </li>
                        <li> <a onClick={this.showComplaintComponent.bind(this)}> Complaints <span>&#10095;</span> </a> </li>
                        <li> <a > Posts <span>&#10095;</span> </a> </li>
                    </ul>

                    <div>
                        <p>@ 2017, To The New</p>

                        <ul className="help-menu">
                            <li> <a href="/about"> About </a> </li>
                            <li> <a href="#"> Help </a> </li>
                        </ul>
                    </div>

                </div>
                </div>

                {
                    this.state.showBuzz ?
                    <div>
                        <Buzz ReduxProps={this.props}/>
                        <RecentBuzz ReduxProps={this.props}/>
                    </div>
                     :
                    <Complaints />
                }
                <Router>
                    <div>
                        <Route exact path='/about' component={About}/>

                    </div>
                </Router>


                <footer className="end"> <p> END OF CONTENT </p> </footer>
            </div>
        );
    }
}

const HomeContainer=connect(state => state)(Home)
export default HomeContainer
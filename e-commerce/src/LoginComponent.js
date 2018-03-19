import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import ReactDom from "react-dom";

class LoginComponent extends Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:'',
    redirectVal : true
    };
    this.login = this.login.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePws = this.changePws.bind(this);
    }
   login(e) {
    
    axios.post('http://10.100.110.132:4000/users/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   changeName(e){
    this.setState( { username :  ReactDom.findDOMNode(this.refs.uname).value })
      
   }
   changePws(e){
    this.setState({ password :  ReactDom.findDOMNode(this.refs.psw).value  })
    
   }
  render() {
    return (
      <form>
      <div className="container">

        <h1>Login</h1>
        <hr /><br />
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" ref="uname"  onChange={this.changeName}/>
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" ref="psw"  onChange={this.changePws}/>
        <button type="submit" onClick={this.login}>Login</button>
        <span className="psw"><a >Forgot Password?</a></span>
        </div>
        </form>
    );
    
  }
  
}

export default LoginComponent;

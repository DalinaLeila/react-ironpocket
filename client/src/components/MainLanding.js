import React, { Component } from 'react';
import Logo from './Logo';
import Button from './Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class MainLanding extends Component {
  render() {
    return (
      <div className="main-landing-wrapper">
        <h1>When you find something you want to view later, put it in Pocket!</h1>
        <div className="landing-form-wrapper">
          <h2>Register</h2>
          <Button type="btn light" text="Create a New Account" value="Signup" onClick={this.props.onToggle}></Button>
          <div className="separator">or</div>
          <div className="login-wrapper">
            <p>Or if you already have an account</p>
            <Button type="link light" text=" Login" value="Login" onClick={this.props.onToggle}></Button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default MainLanding;
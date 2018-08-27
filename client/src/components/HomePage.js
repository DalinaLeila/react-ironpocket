import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AuthService from '../lib/auth-service';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};
    this.authService = new AuthService();
  }
  
  render() {
    const { user } = this.props;
    return (
      <div className="landing-wrapper">
        <Header></Header>
        <div className="main-landing-wrapper">
        <h1>When you find something you want to view later, put it in Pocket!</h1>
        <div className="landing-form-wrapper">
          <h2>Register</h2>
          <Link className="btn light" to={"/signup"}>Create your Account</Link>
          <div className="separator">or</div>
          <div className="login-wrapper">
            <p>Or if you already have an account</p>
            <Link className="link light" to={"/login"}>Login</Link>
          </div>  
        </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default HomePage;
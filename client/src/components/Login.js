import React, { Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logo from './Logo';
import Button from './Button';
import AuthService from '../lib/auth-service';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: '', password: '', name: '', errorMessage: ''};
    this.authService = new AuthService();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.login();
  }

  login() {
    this.authService.login(this.state.username, this.state.password)
    .then((response) => {
      if(response.status == 200) {
        this.props.onChange(response);
        this.props.history.push('/dashboard');
      }
      else {
        this.setState({errorMessage:'Username or password incorrect!'})
      }
    })
    .catch((error) => console.log(error) )
  }

  render() {
    return (
        <div className="form-page-wrapper">
          <div className="left-column-image"></div>
          <div className="form-wrapper">
            <Logo src="./assets/images/logo.svg"></Logo>
            <h2>Login to your Account</h2>
            <p>Access to your IronPocket to keep saving the best articles!</p>
            <span className="error-msg">{this.state.errorMessage}</span>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </fieldset>
              <fieldset>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </fieldset>
              <button className="submit-form-btn" type="submit">Login</button>
            </form>
            <span>
              Or if you don't have an account yet,  
              <Link className="link dark"to={"/signup"}>Signup</Link>
            </span>
          </div>
        </div>
      );
  }
}

export default Login;
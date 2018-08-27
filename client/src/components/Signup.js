import React, { Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logo from './Logo';
import Button from './Button';
import AuthService from '../lib/auth-service';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: '', password: '', name: ''};
    this.authService = new AuthService();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.type == 'Signup' ? this.signup() : this.login();
  }
  
  signup() {
    this.authService.signup(this.state.username, this.state.password, this.state.name)
    .then(() => this.props.history.push('/dashboard'))
    .catch(error => console.log(error))
  }

  render() {
    const type = this.props.type;
    return (
        <div className="form-page-wrapper">
          <div className="left-column-image"></div>
          <div className="form-wrapper">
            <Logo src="./assets/images/logo.svg"></Logo>
            <span className="close-button" onClick={this.props.onToggle}>x</span>
            <h2>Create your Account</h2>
            <p>Create your IronPocket account and start saving the best articles!</p>
            <form onSubmit={this.handleSubmit} className="signup">
              <fieldset>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </fieldset>
              <fieldset>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </fieldset>
              <fieldset>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </fieldset>
              <button className="submit-form-btn" type="submit">Signup</button>
            </form>
            <span>
              Or if you already have an account,  
              <Link className="link dark"to={"/login"}>Login</Link>
            </span>
          </div>

        </div>
      );
  }
}

export default Signup;
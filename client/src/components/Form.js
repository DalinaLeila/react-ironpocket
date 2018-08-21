import React, { Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logo from './Logo';
import Button from './Button';
import AuthService from '../lib/auth-service';


class Form extends Component {
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
    .then(() => window.location.pathname = "/dashboard")
    .catch(error => console.log(error))
  }

  login() {
    this.authService.login(this.state.username, this.state.password)
    .then(() => window.location.pathname = "/dashboard")
    .catch(error => console.log(error))
  }

  render() {
    const type = this.props.type;
    return (
        <div className="form-page-wrapper">
          <div className="form-wrapper">
            <Logo src="./assets/images/logo.svg"></Logo>
            <span className="close-button" onClick={this.props.onToggle}>x</span>
            <h2>{type} Form</h2>
            <form onSubmit={this.handleSubmit}>
            {
              type == 'Signup' &&
              <fieldset>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </fieldset>
            }
              <fieldset>
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </fieldset>
              <fieldset>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              </fieldset>
              <button className="submit-form-btn" type="submit">{type}</button>
            </form>
            <div className="change-form">
              <p>Or if you already have an account</p>
              <Button type="link dark" text={type}></Button>
            </div>
          </div>

        </div>
      );
  }
}

export default Form;
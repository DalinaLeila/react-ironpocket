import React, { Component } from 'react';
import Logo from './Logo';
import Button from './Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AuthService from '../lib/auth-service';


class Header extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.state = {user: ''}
    this.logout = this.logout.bind(this);
  }
  
  componentDidMount() {
    this.authService.isLoggedIn()
    .then(userLogged => {
      this.setState({user: userLogged})
    })
  }

  logout() {
    this.authService.logout()
    .then(response => {
      window.location.pathname = '/';
    })
  }


  render() {
    const user = this.state.user;
    return (
      <header>
          <Logo src="./assets/images/logo.svg"></Logo>
          { !user &&
            <div className="header-links">
              <Link to="/">Home</Link>
              <Button type="link dark" text="Login" value="Login" onClick={this.props.onToggle}></Button>
              <Button type="btn dark" text="Signup" value="Signup" onClick={this.props.onToggle}></Button>
            </div>
          }
          {
            user &&
            <div className="header-user">
              <div className="new-article-wrapper">
                <img src="/assets/images/plus.svg" onClick={this.props.onToggleArticleForm}/>
              </div>
              
              <p>Hello {user.name}!</p>
              <Button type="btn dark" text="Logout" value="Signup" onClick={this.logout}></Button>
            </div>
          }
        </header>
    )
}

}

export default Header;


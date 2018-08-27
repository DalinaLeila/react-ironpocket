import React, { Component } from 'react';
import Logo from './Logo';
import Button from './Button';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AuthService from '../lib/auth-service';


class Header extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
    this.logout = this.logout.bind(this);
  }
  
  componentDidMount() {
    
  }

  logout() {
    this.authService.logout()
    .then(response => {
      window.location.pathname = '/';
    })
  }


  render() {
    const user = this.props.user;
    return (
      <header>
          <Logo src="./assets/images/logo.svg"></Logo>
          { !user &&
            <div className="header-links">
              <Link to="/">Home</Link>
              <Link className="link dark" to={"/login"}>Login</Link>
              <Link className="btn dark" to={"/signup"}>Signup</Link>
            </div>
          }
          {
            user &&
            <div className="header-user">
              <p>Hello {user.name}!</p>
              <div className="new-article-wrapper">
                <img src="/assets/images/plus.svg" onClick={this.props.onToggleArticleForm}/>
              </div>
                <Button type="btn dark" text="Logout" value="Signup" onClick={this.logout}></Button>
              
            </div>
          }
        </header>
    )
}

}

export default Header;


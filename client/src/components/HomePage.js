import React, { Component } from 'react';
import Header from './Header';
import MainLanding from './MainLanding';
import Footer from './Footer';
import Form from './Form';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AuthService from '../lib/auth-service';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {showForm: false, formType: 'Signup', user: ''};
    this.toggleFormDialog = this.toggleFormDialog.bind(this);
    this.authService = new AuthService();
  }

  toggleFormDialog(event) {
    let formType = event.target.getAttribute('value');
    this.setState(prevState => ({showForm: !prevState.showForm, formType}))
  }

  componentDidMount() {
    this.authService.isLoggedIn()
    .then(userLogged => {
      if(userLogged) {
        this.props.history.push('/dashboard');
      }  
    })
  }
  
  render() {
    const { showForm } = this.state;
    return (
      <div className="landing-wrapper">
        <Header onToggle={this.toggleFormDialog}></Header>
        <MainLanding onToggle={this.toggleFormDialog}></MainLanding>
        <Footer></Footer>
        {
          showForm &&
          <Form onToggle={this.toggleFormDialog} type={this.state.formType}></Form>
        }

      </div>
    );
  }
}

export default HomePage;
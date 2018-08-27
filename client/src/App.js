import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDashboard from './components/UserDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthService from './lib/auth-service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};
    this.handleUserChange = this.handleUserChange.bind(this);
    this.authService = new AuthService();
  }

  handleUserChange(response) {
    if(response.status == 200) {
      this.setState({user:response.data})
    }
  }

  componentDidMount() {
    this.authService.isLoggedIn()
    .then(response => {
      this.setState({user:response.data})
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div>
      <Router>
        <div>
            <Route exact path="/" render={
              props => ( user ? ( <Redirect to="/dashboard"/> ) : ( <HomePage {...props} user={user}/> )
            )}/>
            <Route exact path="/login" render={
              props => <Login {...props} onChange={this.handleUserChange}/>}
            />
            <Route exact path="/signup" render={
              props => <Signup {...props} onChange={this.handleUserChange}/>}
            />
            <Route exact path="/dashboard" render={
              props => <UserDashboard {...props} user={user}/>}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

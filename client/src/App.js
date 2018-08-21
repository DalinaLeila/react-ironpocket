import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDashboard from './components/UserDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={UserDashboard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

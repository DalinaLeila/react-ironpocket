import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/auth',
      withCredentials: true
    });
    this.service = service;
    this.user = null;
  }

  signup = (username, name, password) => {
    return this.service.post('/signup', {username, name, password})
    .then(response => response)
    .catch(error => error)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response)
    .catch(error => error)
  }

  isLoggedIn = () => {
    return this.service.get('/loggedin')
    .then(response => response)
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => {
      this.user = null;
      return response.data
    })
    .catch(error => error)
  }
}

export default AuthService;
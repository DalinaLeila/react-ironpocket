import axios from 'axios';

class ArticlesService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:3000/articles',
      withCredentials: true
    });
    this.service = service;
  }

  createNew = (url) => {
    return this.service.post('/new', {url})
    .then(response => response.data)
    .catch(error => error)
  }

  getArticles = () => {
    return this.service.get('/all')
    .then(response => response.data)
    .catch(error => error)
  }

  remove = (articleId) => {
    return this.service.post('/remove', {articleId})
    .then(response => response.data)
    .catch(error => error)
  }
}

export default ArticlesService;
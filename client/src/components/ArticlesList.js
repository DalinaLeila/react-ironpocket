import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ArticlesService from '../lib/articles-service';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.articleService = new ArticlesService();
    this.removeArticle = this.removeArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.state = {articles: []}
  }

  componentDidUpdate(prevProps) {
    if (this.props.articles !== prevProps.articles) {
      this.setState({articles: this.props.articles});
    }
  }

  removeArticle(articleId) {
    this.articleService.remove(articleId)
    .then(response => {
      let newArticles = this.props.articles.filter(article => article._id !== articleId);
      this.setState({articles: newArticles})
    })
    .catch(error => console.log(error))
  }

  updateArticle(articleId, action) {
    this.articleService.update(articleId, action)
    .then(() => {
      this.props.filterArticlesDashboard();
    })
    .catch(error => console.log(error))
  }

  render() {
    const { articles } = this.state;
    return articles ? (
      <div className="articles-wrapper">
        {
          articles.map(article => <ArticleItem data={article} key={article._id} removeArticleItem={this.removeArticle} updateArticleItem={this.updateArticle} ></ArticleItem>)
        }
      </div> 
    ) : '';
  }
}

export default ArticlesList;
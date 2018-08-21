import React, { Component } from 'react';
import ArticleItem from './ArticleItem';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ArticlesService from '../lib/articles-service';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.articleService = new ArticlesService();
    this.removeArticle = this.removeArticle.bind(this);
    this.state = {articles: this.props.articles}
  }

  removeArticle(articleId) {
    this.articleService.remove(articleId)
    .then(response => {
      this.props.articles.filter(article => article._id !== articleId);
    })
    .catch(error => console.log(error))
  }

  render() {
    const { articles } = this.props;
    console.log(this.state)
    return articles ? (
      <div className="articles-wrapper">
        {
          articles.map(article => <ArticleItem data={article} key={article._id} removeArticleItem={this.removeArticle} ></ArticleItem>)
        }
      </div> 
    ) : '';
  }
}

export default ArticlesList;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ArticlesService from '../lib/articles-service';

import Header from './Header';
import FilterCol from './Filter';
import ArticlesList from './ArticlesList';
import NewArticle from './NewArticle';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], showArticleForm: false}
    this.toggleNewArticleDialog = this.toggleNewArticleDialog.bind(this);
    this.addNewArticle = this.addNewArticle.bind(this);
    this.articlesService = new ArticlesService();
  }

  componentDidMount() {
    this.articlesService.getArticles()
    .then(userArticles => {
      if (userArticles.length) {
        this.setState({articles: userArticles})
      }
    })
    .catch(error => console.log(error))
  }

  toggleNewArticleDialog() {
    this.setState(prevState => ({showArticleForm: !prevState.showArticleForm}))
  }

  addNewArticle(url) {
    this.articlesService.createNew(url)
    .then(newArticle => {
      this.setState(prevState => ({articles: [newArticle, ...prevState.articles], showArticleForm: !prevState.showArticleForm}))
    })
    .catch(error => console.log(error))
  }

  render() {
    const { user } = this.props;
    const { showArticleForm } = this.state;
    return (
      <div>
        <Header onToggleArticleForm={this.toggleNewArticleDialog} user={user}></Header>
        <FilterCol></FilterCol>
        <ArticlesList articles={this.state.articles}></ArticlesList>
        {
          showArticleForm &&
          <NewArticle onToggleArticleForm={this.toggleNewArticleDialog} addNewArticleForm={this.addNewArticle}></NewArticle>
        }
      </div>
    );
  }
}

export default UserDashboard;
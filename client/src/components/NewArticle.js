import React, { Component } from 'react';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {url: ''}
    this.handleChange = this.handleChange.bind(this);
    this.addNewArticle = this.addNewArticle.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  addNewArticle() {
    this.props.addNewArticleForm(this.state.url);
  }
  

  render() {
    const { showForm } = this.state;
    return (
      <div className="new-article-form">
        <span className="close-button-small">x</span>
        <p>Save a New Article</p>
        <input type="text" name="url" onChange={this.handleChange} placeholder="Enter a URL here.." />
        <button onClick={this.addNewArticle}>Add it!</button>
      </div>    
    );
  }
}

export default ArticleItem;
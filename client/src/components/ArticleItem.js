import React, { Component } from 'react';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.removeArticle = this.removeArticle.bind(this);

  }

  removeArticle() {
    this.props.removeArticleItem(this.props.data._id)
  }

  render() {
    return (
      <div className="article-item">
        <img src={this.props.data.image} />
        <div className="article-item-text">
          <p>{this.props.data.title}</p>
        </div>
        <div className="article-item-provider">
          <div className="article-provider">
            <img src={this.props.data.providerImg} />
            <p>{this.props.data.provider}</p>
          </div>
          <div className="icons-wrapper">
            <img src="./assets/images/trash.svg"  onClick={this.removeArticle}/>
            <img src="./assets/images/check.svg" />
            <img src="./assets/images/clock.svg" />
            <img src="./assets/images/star.svg" />
          </div>
        </div>
      </div>    
    );
  }
}

export default ArticleItem;
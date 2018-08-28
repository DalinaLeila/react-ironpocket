import React, { Component } from 'react';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.removeArticle = this.removeArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }

  removeArticle() {
    this.props.removeArticleItem(this.props.data._id)
  }

  updateArticle(e) {
    let action = e.target.getAttribute('data');
    this.props.updateArticleItem(this.props.data._id, action)
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
            <img src="./assets/images/check.svg"  onClick={this.updateArticle} data='read' className={this.props.data.read ? 'active' : 'inactive'}/>
            <img src="./assets/images/clock.svg"  onClick={this.updateArticle} data='later' className={this.props.data.later ? 'active' : 'inactive'}/>
            <img src="./assets/images/star.svg"   onClick={this.updateArticle} data='favourite'className={this.props.data.favourite ? 'active' : 'inactive'}/>
          </div>
        </div>
      </div>    
    );
  }
}

export default ArticleItem;
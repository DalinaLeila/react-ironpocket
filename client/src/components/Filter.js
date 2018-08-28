import React, { Component } from 'react';

class FilterCol extends Component {
  constructor(props) {
    super(props);
    this.filterArticles = this.filterArticles.bind(this);
  }

  filterArticles(e) {
    let listLabels = document.getElementsByClassName('list-filter-items');
    for(let i=0; i < listLabels.length; i++) {
      listLabels[i].getAttribute('data') == e.target.getAttribute('data') ? listLabels[i].classList.add('active') :listLabels[i].classList.remove('active');
    } 
    this.props.filterArticlesDashboard(e.target.getAttribute('data'));
  }

  render() {
    return (
      <div className="filter-column-wrapper">
        <ul>
          <li onClick={this.filterArticles} data="all" className="list-filter-items active">All</li>
          <li onClick={this.filterArticles} data="favourite" className="list-filter-items">Favourites</li>
          <li onClick={this.filterArticles} data="later" className="list-filter-items">For Later</li>
          <li onClick={this.filterArticles} data="read" className="list-filter-items">Archiver</li>
        </ul>
      </div>
    )
  }
}
export default FilterCol;
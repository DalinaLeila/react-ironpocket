import React, { Component } from 'react';

const FilterCol = (props) => (
      <div {...props} className="filter-column-wrapper">
        <ul>
          <li className="active">All</li>
          <li>Favourites</li>
          <li>For Later</li>
          <li>Archiver</li>
        </ul>
      </div>
    );

export default FilterCol;
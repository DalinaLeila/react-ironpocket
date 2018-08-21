import React, { Component } from 'react';

const Button = (props) => (
      <div {...props} className={props.type}>
        {props.text}
      </div>
    );

export default Button;
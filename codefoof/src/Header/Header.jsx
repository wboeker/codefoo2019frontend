import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component{

  render(props){
      return(
        <div>
          <head>
            <title>Latest News</title>
          </head>
          <h1>Latest News</h1>
          <hr/>
        </div>
      )
  }
}

export default Header;

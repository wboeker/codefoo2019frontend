import React, { Component } from 'react';
import './SideNav.css';
import PropTypes from 'prop-types';

class SideNav extends Component{
  render(props){
      return(
        <div className="sidebar">
          <div className="latestBox">
          </div>
          <div className="videosBox">
          </div>
          <div className="articlesBox">
          </div>
        </div>
      )
  }
}

export default SideNav;

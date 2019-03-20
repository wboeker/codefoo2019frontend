import React, { Component } from 'react';
import './SideNav.css';
import PropTypes from 'prop-types';

class SideNav extends Component{
  helper(){
    alert("infunction");
  }

  render(props){
      return(
        <div className="sidebar">
          <button className="latestBox" onClick="helper()">
            <p className="navButton">Latest</p>
          </button>
          <div className="videosBox">
            <p className="navButton">Videos</p>
          </div>
          <div className="articlesBox">
            <p className="navButton">Articles</p>
          </div>
        </div>
      )
  }
}

export default SideNav;

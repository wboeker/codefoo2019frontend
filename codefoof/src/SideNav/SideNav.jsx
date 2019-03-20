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
          <button className="latestBox" onClick={this.helper}>
            <p className="navButton">Latest</p>
          </button>
          <button className="videosBox" onClick={this.helper}>
            <p className="navButton">Videos</p>
          </button>
          <button className="articlesBox" onClick={this.helper}>
            <p className="navButton">Articles</p>
          </button>
        </div>
      )
  }
}

export default SideNav;

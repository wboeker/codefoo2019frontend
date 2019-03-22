import React, { Component } from 'react';
import './SideNav.css';
import PropTypes from 'prop-types';

class SideNav extends Component{
  constructor(props){
    super(props);
    this.helper = this.helper.bind(this);
    this.helper2 = this.helper2.bind(this);
  }

  helper(){
    this.props.filterArticles();
  }

  helper2(){
    this.props.filter();
  }

  render(){
      return(
        <div className="sidebar">
          <button className="latestBox" onClick={this.helper}>
            <p className="navButton">Latest</p>
          </button>
          <button className="videosBox" onClick={this.helper}>
            <p className="navButton">Videos</p>
          </button>
          <button className="articlesBox" onClick={this.helper2}>
            <p className="navButton">Articles</p>
          </button>
        </div>
      )
  }
}

export default SideNav;

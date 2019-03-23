import React, { Component } from 'react';
import './SideNav.css';
import PropTypes from 'prop-types';

class SideNav extends Component{
  constructor(props){
    super(props);
    this.clickVideos = this.clickVideos.bind(this);
    this.clickArticles = this.clickArticles.bind(this);
    this.clickLatest = this.clickLatest.bind(this);
  }

  clickVideos(){
    this.props.filterVideos();
  }

  clickArticles(){
    this.props.filterArticles();
  }

  clickLatest(){
    this.props.revert();
  }

  render(){
      return(
        <div className="sidebar">
          <button className="latestBox" onClick={this.clickLatest}>
            <p className="navButton">Latest</p>
          </button>
          <button className="videosBox" onClick={this.clickVideos}>
            <p className="navButton">Videos</p>
          </button>
          <button className="articlesBox" onClick={this.clickArticles}>
            <p className="navButton">Articles</p>
          </button>
        </div>
      )
  }
}

export default SideNav;

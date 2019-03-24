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
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="gray" className="pathFill"/></svg>
            <p className="navButton">Latest</p>
          </button>
          <button className="videosBox" onClick={this.clickVideos}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="gray" className="pathFill"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <p className="navButton">Videos</p>
          </button>
          <button className="articlesBox" onClick={this.clickArticles}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" fill="gray" className="pathFill"/></svg>
            <p className="navButton">Articles</p>
          </button>
        </div>
      )
  }
}

export default SideNav;

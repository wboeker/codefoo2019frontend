import React, { Component } from 'react';
import './News.css';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import SideNav from '../SideNav/SideNav';

class News extends Component{
  constructor(props){
    super(props);
    this.videosVisible = props.videosVisible;
    this.articleList = props.articleList;

    this.state = {
      data: [{"name":"test1"},{"name":"test2"}],
      timeStamp: "timeStamp",
      title: "title",
      numComments: "4",
    }
  }

  render(props){
      return(
            <div className="newsBox">
              <div className="listContainer">
                 <Article image={this.state.test} time={this.state.timeStamp}
                 title={this.articleList} numComments={this.state.numComments}/>
              </div>
            </div>
      )
  }
}

export default News;

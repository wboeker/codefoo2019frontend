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
      timeStamp: "timeStamp",
      title: "title",
      numComments: "4",
    }
  }

  helper(){
    debugger;
    this.articleList.map((article) => {
        return (
          <Article image={this.state.test} time={this.state.timeStamp}
          title={article.contentId} numComments={this.state.numComments}/>
        );
      }
    );

    // <Article image={this.state.test} time={this.state.timeStamp}
    // title={this.articleList.contentId} numComments={this.state.numComments}/>
    // <ul>
    //   {this.articleList.map(article =>
    //     <li key={article.contentId}>
    //       <p>{article.metadata.headline}</p>
    //     </li>
    //   )}
    // </ul>
  }

  render(props){
      return(
            <div className="newsBox">
              <div className="listContainer">
                {this.helper()}
              </div>
            </div>
      )
  }
}

export default News;

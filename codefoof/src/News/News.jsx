import React, { Component } from 'react';
import './News.css';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import SideNav from '../SideNav/SideNav';

const URL = '/content?startIndex=0&count=40';

class News extends Component{
  constructor(props){
    super(props);
    this.videosVisible = props.videosVisible;
    // this.articleList = props.articleList;

    this.state = {
      articles: [],
      timeStamp: "timeStamp",
      title: "title",
      numComments: "4",
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    return fetch(URL, {method: "GET"})
        .then(response => response.json())
        .then(parsedJSON => this.setState({articles: parsedJSON.data}))
        .catch(error => console.log(error));
  }

  helper(){
    const {articles} = this.state;
    return(
      <div>
          {articles.map(article =>
              <Article image={this.state.test} time={this.state.timeStamp}
              title={article.metadata.headline} numComments={this.state.numComments}/>
          )}
      </div>
    );
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

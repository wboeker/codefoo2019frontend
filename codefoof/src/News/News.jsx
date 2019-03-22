import React, { Component } from 'react';
import './News.css';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import SideNav from '../SideNav/SideNav';

const URL = '/content?startIndex=0&count=20';
const COMMENT_URL = 'comments?ids=';

class News extends Component{
  constructor(props){
    super(props);
    this.videosVisible = props.videosVisible;

    this.state = {
      articles: [],
      comments: [],
      timeStamp: "timeStamp",
      title: "title",
      numComments: "4",
    }
  }

  componentDidMount() {
    this.fetchData();
    // this.fetchComments();
  }

  fetchData(){
    return fetch(URL, {method: "GET"})
        .then(response => response.json())
        .then(parsedJSON => this.setState({articles: parsedJSON.data}))
        .catch(error => console.log(error));
  }

  createListId() {
    const {articles} = this.state;
    var newList = articles.map(article => article.contentId);
    var strId = "";
    var index;
    for (index = 0; index < newList.length; index++) {
      strId += newList[index] + ",";
    }
    return strId;
  }

  fetchComments(){
    var withID = COMMENT_URL + this.createListId();
    return fetch(withID, {method: "GET"})
        .then(response => response.json())
        .then(parsedJSON => this.setState({comments: parsedJSON.content}))
        .catch(error => console.log(error));
  }

  addtoArticles(articles,comments){
      if ((articles.length > 0) && (comments.length > 0)){
        return articles.map((article, index) => {articles['numComments'] = comments[index].count});
      }
      debugger;
      return articles;
  }

  helper(){
    this.fetchComments();
    var {articles} = this.state;
    const {comments} = this.state;
    articles = this.addtoArticles(articles,comments);
    debugger;
    return(
      <div>
        <div>
            {comments.map((comment,index) =>
                <p>{comments[index].count}</p>
            )}
        </div>
        <div>
            {articles.map((article,index) =>
                <Article image={this.state.test} time={article.metadata.publishDate}
                title={article.metadata.headline} numComments={this.state.test}/>
            )}
        </div>
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

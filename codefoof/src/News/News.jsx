import React, { Component } from 'react';
import './News.css';
import PropTypes from 'prop-types';
import Article from '../Article/Article';
import SideNav from '../SideNav/SideNav';

class News extends Component{
  constructor(props){
    super(props);
    this.state = {
      //array of articles
      articles: [{"name":<Article/>}, {"name":<Article/>}, {"name":<Article/>}],
      data: [{"name":"test1"},{"name":"test2"}],
    }
  }

  render(props){
      return(
        <div className="newsBox">
          <div className="listContainer">
            {this.state.articles.map(function(d, idx){
               return (<div key={idx}>{d.name}</div>)
             })}
          </div>
        </div>
      )
  }
}

export default News;

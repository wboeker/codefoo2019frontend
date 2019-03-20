import React, { Component } from 'react';
import './Article.css';
import PropTypes from 'prop-types';

class Article extends Component{

  render(props){
      return(
        <div className="articleBox">
          <div className="pictureBox">
          </div>
          <div className="textBox">
            <div className="topRight">time and number of comments</div>
            <br/>
            <div className="bodyText">Insert Headline</div>
          </div>
          <hr/>
        </div>
      )
  }
}

export default Article;

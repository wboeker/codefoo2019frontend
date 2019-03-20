import React, { Component } from 'react';
import './Article.css';
import PropTypes from 'prop-types';

class Article extends Component{

  render(props){
      return(
        <div className="wrap">
          <div className="articleBox">
            <div className="pictureBox">
            </div>
            <div className="textBox">
              <div className="topRight">time and number of comments</div>
            </div>
            <hr/>
          </div>
        </div>
      )
  }
}

export default Article;

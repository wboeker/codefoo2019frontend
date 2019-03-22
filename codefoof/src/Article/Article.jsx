import React, { Component } from 'react';
import './Article.css';
import PropTypes from 'prop-types';

class Article extends Component{

  constructor(props){
    super(props);
    //passing parameters
    this.image = props.image;
    this.time = props.time;
    this.title = props.title;
    this.numComments = props.numComments;
  }

  render(){
      return(
        <div className="wrap">
          <div className="articleBox">
            <div className="pictureBox">
            </div>
            <div className="textBox">
              <div className="topRight">time: {this.time} number of comments: {this.props.numComments}</div>
              <div className="topRight">{this.title}</div>
            </div>
            <hr/>
          </div>
        </div>
      )
  }
}

//set parameter type
Article.propTypes = {
  title:PropTypes.string,
  numComments:PropTypes.string,
}


export default Article;

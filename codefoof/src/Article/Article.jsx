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

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  constructDate() {
    var d = new Date();
    var now = new Date();
    var x = "";
    var dmy = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear();
    var h = this.addZero(d.getHours());
    var m = this.addZero(d.getMinutes());
    var s = this.addZero(d.getSeconds());
    x = dmy + " " + h + ":" + m + ":" + s;
    return x;
  }

  render(){
      return(
        <div className="wrap">
          <div className="articleBox">
            <div className="pictureBox">
              <img src={this.props.image}/>
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

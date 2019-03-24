import React, { Component } from 'react';
import './Article.css';
import PropTypes from 'prop-types';
import moment from 'moment';

class Article extends Component{

  constructor(props){
    super(props);
    //passing parameters
    this.image = props.image;
    this.time = props.time;
    this.title = props.title;
    this.numComments = props.numComments;
  }

  constructDate() {
    moment.locale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s:  'seconds',
        ss: '%ss',
        m:  'a minute',
        mm: '%dm',
        h:  'an hour',
        hh: '%dh',
        d:  'a day',
        dd: '%dd',
        M:  'a month',
        MM: '%dM',
        y:  'a year',
        yy: '%dY'
      }
    });
    const timeStamp = this.props.time;
    const postDatetime = moment(timeStamp);
    const display = postDatetime.fromNow();
    const withoutAgo = display.substring(0, display.length-4);
    return withoutAgo;
    }

  render(){
      return(
        <div className="wrap">
          <div className="articleBox">
            <div className="pictureBox">
              <img src={this.props.image}/>
            </div>
            <div className="textBox">
              <div className="topRight">time: {this.constructDate()} number of comments: {this.props.numComments}</div>
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

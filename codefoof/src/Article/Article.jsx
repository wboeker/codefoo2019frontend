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
    this.videoTime = props.videoTime;
    this.type = props.type;
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

  videoDuration(){
    const timeInSeconds = this.props.videoTime;
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds - minutes * 60;
    if (seconds < 10) {
      seconds += "0";
    }
    // minutes = minutes.toString();
    // seconds = seconds.toString();
    const display = minutes + ":" + seconds;
    if (this.props.type === "video") {
      return display;
    }
    return null;
  }

  displayDuration(){
    if (this.props.type === "video") {
      return(
        <div className="videoTime">
          <svg className="playButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="white"/>
          </svg>
          <div className="videoText"> {this.videoDuration()} </div>
        </div>
      );
    }
    return null;
  }

  render(){
      return(
        <div className="wrap">
          <div className="articleBox">
            <div className="pictureBox">
              <img src={this.props.image}/>
              {this.displayDuration()}
            </div>
            <div className="textBox">
              <div className="topRight dateComments">{this.constructDate()} - {this.props.numComments}</div>
              <div className="topRight title">{this.title}</div>
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

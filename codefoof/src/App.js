import React, { Component } from 'react';
import Header from './Header/Header';
import News from './News/News';
import SideNav from './SideNav/SideNav';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

const URL = '/content?startIndex=0&count=40';

class App extends Component {

  constructor(props){
    super(props);
    this.filterArticles = this.filterArticles.bind(this);
    this.state = {
      articles: [],
      videosVisible: false,
    }
  }

  componentDidMount() {
  fetch(URL, {method: "GET"})
    .then(res => res.text())          // convert to plain text
    .then(text => alert(text))  // then log it out
    // .then(response => response.json())
    // .then(data => this.setState({ articles: data.data }));
    // fetch(URL, {mode:"no-cors"})
  }

  filterArticles() {
    // this.setState({
    //   videosVisible: true;
    // });
  }

  render() {
    const {articles} = this.state;
    if(this.state.data !== null){
      return (
        <div className="App">
          <ul>
            {articles.map(article =>
              <li key={article.contentId}>
                <p>{article.metadata.headline}</p>
              </li>
            )}
          </ul>
          <Header/>
          <SideNav filterArticles={this.filterArticles}/>
          <News videosVisible={this.state.videosVisible}/>
        </div>
      );
    }
  }
}

export default App;

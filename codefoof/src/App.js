import React, { Component } from 'react';
import Header from './Header/Header';
import News from './News/News';
import SideNav from './SideNav/SideNav';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

// const URL = '/content?startIndex=0&count=40';

class App extends Component {

  constructor(props){
    super(props);
    this.filterArticles = this.filterArticles.bind(this);
    this.state = {
      articles: [],
      videosVisible: false,
      articlesVisible: false,
    }
  }

  // componentDidMount() {
  //   this.fetchData();
  // // fetch(URL, {method: "GET"})
  // //   .then(response => response.json())
  // //   .then(data => this.setState({ articles: data.data }));
  // //   // .then(res => res.text())          // convert to plain text
  // //   // .then(text => alert(text))  // then log it out
  // //   // fetch(URL, {mode:"no-cors"})
  // }

  // fetchData(){
  //   return fetch(URL, {method: "GET"})
  //       .then(response => response.json())
  //       .then(parsedJSON => this.setState({articles: parsedJSON.data}))
  //       .catch(error => console.log(error));
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //    return ((this.state.articles !== nextState.articles) || (this.state.videosVisible !== nextState.videosVisible));
  //  }

  filterArticles() {
    this.setState({
      videosVisible: true,
    });
  }

  filter() {
    this.setState({
      articlesVisible: true,
    });
  }

  render() {
    const {articles} = this.state;
    return (
      <div className="App">
        <Header/>
        <SideNav filterArticles={this.filterArticles} filter={this.filter}/>
        <News videosVisible={this.state.videosVisible} articlesVisible={this.state.articlesVisible}/>
      </div>
    );
  }
}

export default App;

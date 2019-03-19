import React, { Component } from 'react';
import Header from './Header/Header';
import News from './News/News';
import SideNav from './SideNav/SideNav';
import Article from './Article/Article';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <News/>
        <SideNav/>
        <Article/>
      </div>
    );
  }
}

export default App;

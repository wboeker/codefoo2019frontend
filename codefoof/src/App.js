import React, { Component } from 'react';
import Header from './Header/Header';
import News from './News/News';
import SideNavbar from './SideNav/SideNav';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideNavbar/>
        <News/>
      </div>
    );
  }
}

export default App;

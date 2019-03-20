import React, { Component } from 'react';
import Header from './Header/Header';
import News from './News/News';
import SideNav from './SideNav/SideNav';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  test() {
    alert("test");
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <SideNav test={this.test}/>
        <News/>
      </div>
    );
  }
}

export default App;

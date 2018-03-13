import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './homepage.js';
import Nav from './nav.js';
import Login from './login.js';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
            <Nav />
            <Login />

      </div>
    );
  }
}


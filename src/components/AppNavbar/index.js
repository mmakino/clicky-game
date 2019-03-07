/*
  App Navbar
*/

import React, { Component } from 'react';
import "./style.css";
import logo from '../../shared/images/logo.svg';

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand">
        <a className="navbar-brand App-header-title" href="/">
          2019 Seattle Mariners Clicky Game
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a> */}
          </div>
        </div>
        <a className="navbar-brand"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </nav>
    );
  }; 
} 

export default AppNavbar;
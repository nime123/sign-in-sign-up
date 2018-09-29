import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';

class App extends Component {
  render() {
    return (

          <div class='navbar'>

        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a>aaaaa</a>
                    <ul>
                     <li><a> Our Team</a> </li>
                     <li><a> Listing search</a> </li>
                     <li><a> Help</a> </li>
                    </ul>
          </li>
          <li><a> About</a></li>
          <li><a href='/login'>Login</a></li>
          <li><a href='/sign'>Login in</a></li>
       </ul>



            <hr />

          </div>


    );
  }
}

export default App;

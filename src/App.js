import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch,Redirect} from "react-router-dom";
import Home from './Home';
import page1 from './Signup';
import Navbar from './Navbar';
import page2 from './Login';

class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
               
        <Router>
          <div>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/sign' component={page1}/>
                <Route path='/login' component={page2}/>  

             
         </div>
        </Router>
      </div>

    );
  }
}

export default App;
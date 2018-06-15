import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink}  from 'react-router-dom';
import {Route}  from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';
import MessageList from './components/messagelist';
import Post from './components/post';

class App extends Component {
  render() {
    return (

<BrowserRouter>
  <div className="App">
     <ul className="nav nav-tabs">
     <li className="nav-item">
     <NavLink exact to="/" className="nav-link" activeClassName="active">Message</NavLink>
     </li>
      <li className="nav-item">
        <NavLink to="/post"  className="nav-link" activeClassName="active">Post</NavLink>
         </li>
         </ul>

         <div className="container">
           <Route exact path="/" component={MessageList} />
           <Route exact path="/post" component={Post} />
         </div>
           </div>
       </BrowserRouter>

    );
  }
}

export default App;

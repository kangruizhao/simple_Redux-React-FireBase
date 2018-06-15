import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';
import { bindActionCreators } from "redux";
import '../App.css';
import _ from 'lodash';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink}  from 'react-router-dom';
import {Route}  from 'react-router-dom';
import {BrowserRouter}  from 'react-router-dom';
import formFields from './formfield';
class MessageDetail extends Component {




  render() {
     if (!this.props.message) {
       return <div>Select a message to get started.</div>;
     }

     return (
       <div>
         <h3>Details for:</h3>
         <div>Title: {this.props.message.user}</div>
         <div>Pages: {this.props.message.body}</div>
       </div>
     );
   }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    message: state.activeMessage
  };
}


export default connect(mapStateToProps)(MessageDetail);

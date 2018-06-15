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
import MessageDetail from './messagedetail';
class MessageList extends Component {
  componentDidMount() {
     this.props.getmessage();
  }
  messageitem(message,id){
return (
  <li style={{"padding-bottom": "25px" }}
    onClick={() => this.props.selectMessage(message)}
         className="list-group-item"
    >
    Message from {message.user}
  </li>
);
}
   messagerender(){
     console.log(this.props.messages);
     return _.map(this.props.messages,this.messageitem.bind(this));
   }

  render() {

  if(this.props.messages.length===0){
    return(<div>loading...</div>);
  }
  else {return(
<div>
  <ul>
     {this.messagerender()}
   </ul>
  <MessageDetail/>
</div>
    );
  }
}
}
function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  return {
    messages: state.messages
  };
}


export default connect(mapStateToProps,actions)(MessageList);

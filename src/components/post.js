import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm ,Field } from 'redux-form';
import { Link } from 'react-router';
import '../App.css';

import { createPost } from "../actions";
import { connect } from "react-redux";
import formFields from './formfield';
/*const FIELDS = [
{ label: 'Your Name', name: 'name' },
{ label: 'Message Body', name: 'message' }
];*/
const FIELDS = {
  user: {
    type: 'input',
    label: 'Your Name'
  },
  body: {
    type: 'input',
    label: 'Message Body'
  }
};
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>

      <input {...input} placeholder={label} type={type}  className="form-control" />
      <div>
      {touched && error && <span style={{color: "red" }}>{error}</span>}
      </div>
  </div>
);

class Post extends Component {
  onSubmit(values) {

 this.props.createPost(values);
}
  loopthefield(fieldConfig,field){
    return(
      <Field
     name={field}
     type="text"
     component={renderField}
     label={fieldConfig.label}
     />
    );
  }


render() {
   const { handleSubmit,touched,error } = this.props;

   return (

     <form onSubmit={handleSubmit(props => this.onSubmit(props))} >
       <h3>Create A New Post</h3>
         {_.map(FIELDS, this.loopthefield.bind(this))}
       <button type="submit" className="btn btn-primary">Submit</button>

     </form>
   );
 }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if (!values[field]) {
      errors[field] = `Enter a ${field}`;
    }
  });

  return errors;
}





export default reduxForm({
    validate,
  form: 'PostsNew',
  fields: _.keys(FIELDS)

})(connect(null, { createPost })(Post));

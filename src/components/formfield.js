import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} value=""/>
      <div className="alert alert-success" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

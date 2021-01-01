import React, { Component } from 'react';
// import { Container, Grid, TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';

import StreamForm from '../../Components/StreamForm/StreamForm.component';
import { createStream } from '../../../../actions';


class StreamCreate extends Component {
  // renderError({error, touched}){
  //   if(touched && error){
  //     return error;
  //   }
  // }

  // renderInput = (fieldProps) => {
  //   console.log(fieldProps.meta);
  //   return (
  //     fieldProps.meta.error && fieldProps.meta.touched ?
  //     <TextField 
  //     color="primary" 
  //     error
  //     fullWidth 
  //     { ...fieldProps.input } 
  //     {...fieldProps}
  //     helperText={ this.renderError(fieldProps.meta) }
  //    />
  //    :  
  //     <TextField 
  //       color="primary" 
  //       fullWidth 
  //       { ...fieldProps.input } 
  //       {...fieldProps}
  //       helperText={ this.renderError(fieldProps.meta) }
  //      />
  //   );
  // }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render(){
    return(
      <div>
        <h4>Create Stream</h4>
        <StreamForm onSubmit={ this.onSubmit } />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
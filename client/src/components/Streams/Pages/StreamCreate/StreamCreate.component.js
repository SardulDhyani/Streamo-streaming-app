import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
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
        <Typography align="center" variant="h5">Create a New Stream</Typography>
        <StreamForm onSubmit={ this.onSubmit } />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
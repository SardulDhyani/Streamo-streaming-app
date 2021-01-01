import React, { Component } from 'react';
import { Container, Grid, TextField, Button, Box } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';

// import Styles from './StreamCreate.module.css';

class StreamForm extends Component {
  renderError({error, touched}){
    if(touched && error){
      return error;
    }
  }

  renderInput = (fieldProps) => {
    console.log(fieldProps.meta);
    return (
      fieldProps.meta.error && fieldProps.meta.touched ?
      <TextField 
      color="primary" 
      error
      fullWidth 
      { ...fieldProps.input } 
      {...fieldProps}
      helperText={ this.renderError(fieldProps.meta) }
     />
     :  
      <TextField 
        color="primary" 
        fullWidth 
        { ...fieldProps.input } 
        {...fieldProps}
        helperText={ this.renderError(fieldProps.meta) }
       />
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render(){
    return(
      <Container maxWidth="xl">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Grid item>
            <Field name="streamTitle" component={this.renderInput} label="Enter Title" type="text"/>
          </Grid>
          <Grid item>
            <Field name="streamDescription" component={this.renderInput} label="Enter Description" multiline rowsMax={5} rows={5} type="text" />
          </Grid>
          <Box mt={2} mx="auto" >
            <Button variant="contained" type="Submit" color="primary">Submit</Button>
          </Box>
        </form>
      </Container>
    );
  }
}

const validate = (formValues) => {
  const errors = {}
  if(!formValues.streamTitle){
    errors.streamTitle = "Please enter title";
  }
  if(!formValues.streamDescription){
    errors.streamDescription = "Please enter description";
  }

  return errors;
}

export default reduxForm({ form : 'streamForm', validate })(StreamForm);

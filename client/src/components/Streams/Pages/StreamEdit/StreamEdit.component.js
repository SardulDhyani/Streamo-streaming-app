import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import StreamForm from '../../Components/StreamForm/StreamForm.component';
import { fetchStream, editStream } from '../../../../actions';

class StreamEdit extends Component {

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.streamId, formValues);
  };

  componentDidMount(){
    // console.log(this.props.match.params.streamId);
    this.props.fetchStream(this.props.match.params.streamId);
  }
    
    // console.log(props.match.params.streamId);
  render(){
    console.log(this.props.stream);
    return(
      this.props.stream._id ?
      <>
        <Typography align="center" variant="h4">
          Edit Stream
        </Typography>
        <StreamForm initialValues={ this.props.stream } onSubmit={ this.onSubmit } />
      </>
      :
      <>
        <p>Loading...</p>
      </>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { stream : state.selectedStream }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
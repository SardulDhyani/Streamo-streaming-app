import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../../../actions';

class StreamEdit extends Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.streamId);
  }
    
    // console.log(props.match.params.streamId);
  render(){
    console.log(this.props);
    return(
      this.props.stream ?
      <>
        { this.props.stream._id }<br />
        { this.props.stream.streamTitle }<br />
        { this.props.stream.streamDescription }
      </>
      :
      <>
        <p>Loading...</p>
      </>
    );
  }
}

const mapStateToProps = ( state ) => {
  return { stream : state.streams.selectedStream }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
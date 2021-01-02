import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Button, Typography } from '@material-ui/core';


import { deleteStream } from '../../../../actions';


class StreamDelete extends Component {

  deleteStreamHelper= () =>{
    // Check for user Id Later on
    // console.log(this.props);
    this.props.deleteStream(this.props.match.params.streamId);
  }

  render(){
    return(
      <Container align="center" >
        <Typography variant="h5" color="error">
          Are you sure want to delete this stream ?
        </Typography>
        <br />
        <br />
        <Link to="/">
          <Button variant="contained" color="inherit">NO</Button> 
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="primary" variant="contained" onClick={ this.deleteStreamHelper }>YES</Button>
      </Container>
    );
  }
}

// const mapStateToProps = ( state ) => {
//   return { stream : this.state.selectedStream }
// }

export default connect(null, { deleteStream })(StreamDelete);
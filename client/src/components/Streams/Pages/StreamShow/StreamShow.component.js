import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core';
import flv from 'flv.js';

import { fetchStream } from '../../../../actions';


class StreamShow extends Component {

  constructor(props){
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount (){
    const { streamId } = this.props.match.params;
    this.props.fetchStream(streamId);

    this.buildPlayer();
  }

  componentDidUpdate(){
    this.buildPlayer();
  }
  
  buildPlayer(){
    if(this.player || !this.props.stream){
      return ;
    }

    const { streamId } = this.props.match.params;

    this.player = flv.createPlayer({
      type : 'flv',
      url : `http://localhost:8000/live/${streamId}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();

  }

  render(){
    console.log(this.props);
    return(
      this.props.stream ?
      <Container maxWidth="xl" align="center">
        <Grid xl={12} md={12}>
          <video ref={ this.videoRef } style={{ width : '100%'}} controls />
          {/* <Typography>
            This is Stream Video
          </Typography> */}
        </Grid>
        <Typography variant="h4">
          { this.props.stream.streamTitle }
        </Typography>
        <Typography>
          { this.props.stream.streamDescription }
        </Typography>
      </Container>
      :
      <Container>
        <Typography>
          Loading...
        </Typography>
      </Container>
    );
  }
};

const mapStateToProps = ( state ) => {
  return { stream : state.selectedStream };
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);
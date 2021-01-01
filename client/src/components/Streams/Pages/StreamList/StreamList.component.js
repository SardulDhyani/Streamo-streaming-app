import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchStreams } from '../../../../actions';
import { Link } from 'react-router-dom';

import './StreamList.css';

class StreamList extends Component {
  
  componentDidMount(){
    this.props.fetchStreams();
  }

  renderStreamsList() {
    return this.props.streams.map( stream => {
      return (
        <Link to={'/streams/'+stream._id}>
          <Grid key={stream._id} item className="animateThis">
            <Paper className="paper">
              <Typography>
                Display Image Here
              </Typography>
            </Paper>
            <Typography>
              { stream.streamTitle }
            </Typography>
          </Grid>
        </Link>
      );
    });
  }

  render(){
    return(
      <Grid container className="root" spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            { this.renderStreamsList() }
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

const mapStateToProps = (state) => {
  return { streams : Object.values(state.streams) };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
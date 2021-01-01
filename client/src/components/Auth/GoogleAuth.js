import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem } from '@material-ui/core';
// import { AccountCircleRounded, AddCircleRounded, Storage, ExitToApp } from '@material-ui/icons';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component{

  renderAuthButton(){
    if(this.props.isSignedIn === null){
      return (
        <Button color="inherit">
          <i className="fas fa-bug"></i> &nbsp;
          No Idea
        </Button>
      );
    } else if(this.props.isSignedIn){
      return (
        <Button color="inherit" onClick={this.onSignOutClick}>
          <i className="fas fa-sign-out-alt"></i> &nbsp;
          Log Out
        </Button>
        // <>
        //   <Button color="inherit" aria-controls="loggedInMenu" aria-haspopup="true">
        //     <AccountCircleRounded /> &nbsp;Profile
        //   </Button>
        //   <Menu id="loggedInMenu">
        //     <MenuItem> <Storage /> &nbsp; Your Channel</MenuItem>
        //     <MenuItem> <AddCircleRounded /> &nbsp; Create New Stream</MenuItem>
        //     <MenuItem> <ExitToApp /> &nbsp; Sign Out</MenuItem>
        //   </Menu>
        // </>

      );
    } else{
      return (
        <Button color="inherit" onClick={this.onSignInClick}>
          <i className="fab fa-google"></i> &nbsp;
          Log In
        </Button>
      );
    }
  }

  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId : process.env.REACT_APP_GAPI_CLIENT_ID,
        scope : 'email'
      })
        .then( () => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId());
    } else{
      this.props.signOut();
    }
  }

  onSignInClick
   = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render(){

    return(<span> { this.renderAuthButton() } </span>);
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn : state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
import React, { Component } from 'react';
import Profile from './Profile.js';
import Signin from './Signin.js';
import {UserSession, makeAuthRequest, redirectToSignInWithAuthRequest} from 'blockstack';
import {appConfig} from "../utils/constants"


const userSession = new UserSession({ appConfig: appConfig })

export default class Onboarding extends Component {


  handleSignIn(e) {
    e.preventDefault();

    const authRequest = userSession.makeAuthRequest(
      userSession.generateAndStoreTransitKey(),
      'https://127.0.0.1:3000/explorer',
      'https://127.0.0.1:3000/manifest.json',
      ['store_write', 'publish_data'],
      'https://127.0.0.1:3000/',
      {
        solicitGaiaHubUrl: true
      } // new options param
    );
    userSession.redirectToSignInWithAuthRequest(authRequest);
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  render() {
    return (
      <div className="site-wrapper">
        <div className="site-wrapper-inner">
          { !userSession.isUserSignedIn() ?
            <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            : <Profile userSession={userSession} handleSignOut={ this.handleSignOut } />
          }
        </div>
      </div>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
    }
  }
}
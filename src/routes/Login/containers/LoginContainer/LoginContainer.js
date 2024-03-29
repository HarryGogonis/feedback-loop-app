// @flow
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {
  firebaseConnect,
  isEmpty,
  isLoaded,
  pathToJS
} from 'react-redux-firebase';


import Section from 'grommet/components/Section';
import Spinning from 'grommet/components/icons/Spinning';
import GoogleButton from 'react-google-button'

type Props = {
  firebase: any,
  auth: any,
  profile: any,
}

class Login extends React.Component<Props> {
  login = () => this.props.firebase.login({ provider: 'google' })

  render() {
    const { auth, profile } = this.props;

    if (!isLoaded(auth)) {
      return <Spinning />
    }

    if (isEmpty(auth)) {
      return (
        <Section align="center">
          <GoogleButton onClick={this.login} />
        </Section>
      );
    }

    if (!isEmpty(profile) && profile.sites) {
      const keys = Object.keys(profile.sites);
      // For now, grab the first site
      // Later we can have a "selected site" on profile.
      const siteKey = profile.sites[keys[0]];
      return <Redirect to={`/sites/${siteKey}`} />
    }

    if (!isEmpty(profile)) {
      return <Redirect to="/sites/new" />
    }

    return null;
  }
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      auth: pathToJS(firebase, 'auth'),
      profile: pathToJS(firebase, 'profile'),
    })
  )
)(Login)

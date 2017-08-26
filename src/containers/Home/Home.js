// @flow
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  isEmpty,
  isLoaded,
  pathToJS
} from 'react-redux-firebase';
import FeedbackList from '../FeedbackList';

type Props = {
  auth: any,
  firebase: any,
  children: React$Element<*>
}

class Home extends React.Component<Props> {
  login = () => this.props.firebase.login({ provider: 'google' })

  render() {
    return (
      <div>
        <button onClick={this.login}>Log In</button>
        <FeedbackList />
      </div>
    )
  }
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      auth: pathToJS(firebase, 'auth')
    })
  )
)(Home)

// @flow
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import {
  firebaseConnect,
  dataToJS,
  pathToJS,
  isLoaded
} from 'react-redux-firebase';

import Feedback from '../Feedback'

type Props = {
  siteKey: string,
  // mapStateToProps
  feedback: { [string]: string },
  auth: any
};

const siteKey = '-KsUNOgWtpM_Il-X3Dnm'; // TODO do not hardcode

class FeedbackList extends React.Component<Props> {
  getFeedbacks = () => {
    console.log(this.props);
    const feedback  = this.props.feedbackList;
    if (!feedback) {
      return;
    }
    const keys = Object.keys(feedback);
    return keys.map(key => {
      const value = feedback[key];
      return value && <Feedback id={value} key={key}/>
    })
  }

  render() {
    return (
      <div>
        {isLoaded(this.props.auth) && this.getFeedbacks()}
      </div>
    );
  }
}

export default compose(
  firebaseConnect([
    `sites/${siteKey}/feedback#limitToFirst=2`
  ]),
  connect(
    ({ firebase }) => ({ // state.firebase
      feedbackList: dataToJS(firebase, `sites/${siteKey}/feedback`) || {}, // in v2 todos: firebase.data.todos
      auth: pathToJS(firebase, 'auth') // in v2 todos: firebase.auth
    })
  )
)(FeedbackList)

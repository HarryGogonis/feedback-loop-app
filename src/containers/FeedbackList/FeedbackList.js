// @flow
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import type { Feedback as FeedbackType } from '../types';
import {
  firebaseConnect,
  dataToJS,
  pathToJS
} from 'react-redux-firebase';

import Feedback from '../../components/Feedback'

type Props = {
  feedbacks: { [string]: FeedbackType}
};

class FeedbackList extends React.Component<Props> {
  getFeedbacks = () => {
    const { feedbacks } = this.props;
    const keys = Object.keys(feedbacks);
    return keys.map(key => {
      const value = feedbacks[key];
      return value && <Feedback feedback={value} key={key}/>
    })
  }

  render() {
    return (
      <div>
        {this.getFeedbacks()}
      </div>
    );
  }
}

export default compose(
  firebaseConnect([
    'feedback'
  ]),
  connect(
    ({ firebase }) => ({ // state.firebase
      feedbacks: dataToJS(firebase, 'feedback') || {}, // in v2 todos: firebase.data.todos
      auth: pathToJS(firebase, 'auth') // in v2 todos: firebase.auth
    })
  )
)(FeedbackList)

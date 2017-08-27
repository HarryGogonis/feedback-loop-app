// @flow
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import type { Feedback as FeedbackType } from '../../types/Feedback'

import {
  firebaseConnect,
  dataToJS,
  pathToJS,
  isLoaded
} from 'react-redux-firebase';
type Props = {
  id: string,
  feedback: FeedbackType
}

const Feedback = ({ feedback, id }: Props) => {
  if (isLoaded(feedback)) {
    return (
      <li>
        { new Date(feedback.timestamp).toLocaleString() }
        <pre>{JSON.stringify(feedback)}</pre>
      </li>
    );
  }
  return <p>oops!</p>;
}

export default compose(
  firebaseConnect(
    ({ id }) => ([
    `feedback/${id}`
  ])),
  connect(
    ({ firebase }, { id }) => ({
      feedback: dataToJS(firebase, `feedback/${id}`),
    })
  )
)(Feedback)

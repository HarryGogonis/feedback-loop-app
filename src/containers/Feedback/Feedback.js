// @flow
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import moment from 'moment'
import Card from 'grommet/components/Card';

import Rating from '../../components/Rating';
import type { Feedback as FeedbackType } from '../../types/Feedback'

import {
  firebaseConnect,
  dataToJS,
  isLoaded
} from 'react-redux-firebase';
type Props = {
  id: string,
  feedback: FeedbackType
}

const Feedback = ({ feedback, id }: Props) => {
  if (isLoaded(feedback)) {
    const time = moment(feedback.timestamp).fromNow()
    return (
      <Card
        label={<Rating rating={feedback.rating} />}
        description={feedback.comment}
        link={time}
      />
    );
  }
  return null;
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

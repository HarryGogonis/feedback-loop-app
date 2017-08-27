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
  site: {
    domain: string,
    feedback?: { [string]: string }
  },
  auth: any
};

const siteKey = '-KsUNOgWtpM_Il-X3Dnm'; // TODO do not hardcode

class FeedbackList extends React.Component<Props> {
  getFeedbacks = () => {
    const { feedback } = this.props.site;
    if (!feedback) {
      return;
    }
    const keys = Object.keys(feedback);
    return keys.map(key => {
      const value = feedback[key];
      return value && <Feedback id={value} key={key}/>
    }).reverse()
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
    `sites/${siteKey}`
  ]),
  connect(
    ({ firebase }) => ({ // state.firebase
      site: dataToJS(firebase, `sites/${siteKey}`) || {}, // in v2 todos: firebase.data.todos
      auth: pathToJS(firebase, 'auth') // in v2 todos: firebase.auth
    })
  )
)(FeedbackList)

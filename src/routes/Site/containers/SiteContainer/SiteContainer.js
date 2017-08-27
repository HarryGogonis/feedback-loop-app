// @flow
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  dataToJS,
  isLoaded
} from 'react-redux-firebase';

import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

import FeedbackList from '../../../../containers/FeedbackList';
import Header from '../../components/Header';

type Props = {
  match: any,
  site: {
    domain: string
  }
}

const Site = ({ site, match }: Props) => {
  const { siteKey } = match.params;
  if (isLoaded(site)) {
    return (
      <Box>
        <Header name={site.domain} />
        <FeedbackList siteKey={siteKey} />
      </Box>
    )
  }
  return <Spinning />;
}

export default compose(
  firebaseConnect(
    ({ match }) => ([
    `sites/${match.params.siteKey}`
  ])),
  connect(
    ({ firebase }, { match }) => ({ // state.firebase
      site: dataToJS(firebase, `sites/${match.params.siteKey}`) || {}, // in v2 todos: firebase.data.todos
    })
  )
)(Site)

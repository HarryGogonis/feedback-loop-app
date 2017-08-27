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
import FeedbackList from '../../../../containers/FeedbackList';

type Props = {
  firebase: any,
}

const Site = (props: Props) => {
  console.log(props)
  return (
    <Box>
      New Site
    </Box>
  )
}

export default compose(
  firebaseConnect(),
)(Site)

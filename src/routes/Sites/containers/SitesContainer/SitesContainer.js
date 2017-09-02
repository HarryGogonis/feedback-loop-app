// @flow
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  pathToJS,
  isLoaded
} from 'react-redux-firebase';

import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';

type Props = {
  match: any,
  sites: Array<any>
}

const Sites = (props: Props) => {
  console.log(props)
  return <Spinning />;
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      profile: pathToJS(firebase, 'profile'),
    })
  )
)(Sites)

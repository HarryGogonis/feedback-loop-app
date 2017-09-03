// @flow
import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  firebaseConnect,
  pathToJS,
  isLoaded,
  isEmpty
} from 'react-redux-firebase';

import Spinning from 'grommet/components/icons/Spinning';
import SitesList from '../../components/SitesList';

type Props = {
  sites: Array<any>
}

const Sites = ({ sites }: Props) => {
  if (!isLoaded(sites)) {
      return <Spinning />;
  }

  if (isEmpty(sites)) {
    return null;
  }

  return <SitesList sites={sites} />
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      sites: pathToJS(firebase, 'profile/sites'),
    })
  )
)(Sites)

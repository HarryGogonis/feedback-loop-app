// @flow
import React from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { Link } from 'react-router-dom';

type Props = {
  sites: { [string]: { domain: string } }
}

const renderSites = (sites) =>  Object.keys(sites).map(key => {
  const site = sites[key];
  return (
    <ListItem key={key}>
      <Link to={`sites/${key}`}>{site.domain}</Link>
    </ListItem>
  )
})

export default ({ sites }: Props) => (
  <List>{renderSites(sites)}</List>
);

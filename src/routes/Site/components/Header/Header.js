// @flow
import React from 'react';

import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

type Props = {
  name: string
};

export default ({ name }: Props) => (
  <Header>
    <Title>
      {name}
    </Title>
  </Header>
);

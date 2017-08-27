// @flow
import React from 'react';
import Image from 'grommet/components/Image';

import images from './images';

const Rating = ({ rating } : {
  rating: number,
}) => <Image src={images[rating % 5]} size="thumb"/>

export default Rating;

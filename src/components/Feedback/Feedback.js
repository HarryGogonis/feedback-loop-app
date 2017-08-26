// @flow
import React from 'react';
import type { Feedback } from '../types/Feedback'

type Props = {
  feedback: Feedback
}

export default (props: Props) => (
  <li>
    <pre>{JSON.stringify(props.feedback)}</pre>
  </li>
);

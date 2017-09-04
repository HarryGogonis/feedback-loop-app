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
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import TextInput from 'grommet/components/TextInput';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';

type Props = {
  firebase: any,
  auth: {
    uid: string
  },
  history: {
    push: (string) => void
  }
}

type State = {
  domain: string,
  error: string,
}

class Site extends React.Component<Props, State> {
  state = {
    domain: '',
    error: '',
  }

  onSubmit = (ev) => {
    const { domain } = this.state;
    const { firebase, auth } = this.props;
    ev.preventDefault();

    if (!domain) {
      return;
    }

    firebase.ref('/sites').push({ domain }).then(snapshot => {
      const key = snapshot.key
      firebase.ref(`/users/${auth.uid}/sites`).push(key);
      this.props.history.push(`/sites/${key}`)
    });
  }

  setDomain = (ev) => {
    const domain = ev.target.value;
    const error = domain ? '' : 'Required';
    this.setState({
      domain,
      error
    })
  }

  render() {
    return (
      <Box align="center">
        <Form onSubmit={this.onSubmit}>
          <Header>
            <Heading>Create a Site</Heading>
          </Header>
          <FormFields>
            <FormField label="Website" error={this.state.error}>
              <TextInput
                id='domain'
                name='domain'
                placeHolder="http://google.com"
                onDOMChange={this.setDomain}
              />
            </FormField>
          </FormFields>
          <Footer pad={{"vertical": "medium"}}>
            <Button
              label='Submit'
              type='submit'
              primary={true}
           />
          </Footer>
        </Form>
      </Box>
    )
  }
}
export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      auth: pathToJS(firebase, 'auth'),
    })
  )
)(Site)

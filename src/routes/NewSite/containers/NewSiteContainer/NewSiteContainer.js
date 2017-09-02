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
}

type State = {
  domain?: string,
}

class Site extends React.Component<Props, State> {
  onSubmit = (ev) => {
    ev.preventDefault();
    console.log(this.state);
  }

  setDomain = (ev) => {
    this.setState({
      domain: ev.target.value
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
            <FormField label="Website">
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
)(Site)

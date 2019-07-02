/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, FormGroup, Container, Row, Col, Alert,
} from 'reactstrap';
import InputField from '../InputField/index';


// creation du formulaire:
let LogInForm = (props) => {
  const { handleSubmit, erreur } = props;
  return (
    <Container>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Alert color="danger" isOpen={erreur}>Login Failed</Alert>
              <Field
                id="playlistName"
                type="playlistName"
                name="playlistName"
                component={InputField}
                placeholder="Votre e-mail"
                className="form-control"
              />
            </FormGroup>
            <Field
              id="track"
              type="track"
              name="track"
              component={InputField}
              placeholder="Votre mot de passe"
              className="form-control"
            />
            <Button color="primary" size="lg" active type="submit">Sign in</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// validation des entrees:


LogInForm = reduxForm({
  form: 'signIn',
  validate,
})(LogInForm);

export default LogInForm;

/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, FormGroup, Container, Row, Col,
} from 'reactstrap';
import InputField from './InputField';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import {addPlaylist} from '../../Action';
import { connect } from 'react-redux'


// creation du formulaire:
class playlistForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playlist_name: '',
      track1: '',
      track2: '',
      track3: '',
      track4: '', 
    }
  }

  handleRedirect = (event) => {
    event.preventDefault()
    this.props.addPlaylist(this.state)
    const { history } = this.props;
    history.push('/step2');
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){

    return (
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Form onSubmit={this.handleRedirect}>
              <FormGroup>
                <Field
                  id="playlistName"
                  type="text"
                  name="playlist_name"
                  component={InputField}
                  placeholder="playlist"
                  className="form-control"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  id="track"
                  type="text"
                  name="track1"
                  component={InputField}
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  id="track"
                  type="text"
                  name="track2"
                  component={InputField}
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  id="track"
                  type="text"
                  name="track3"
                  component={InputField}
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Field
                  id="track"
                  type="text"
                  name="track4"
                  component={InputField}
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="primary" size="lg" active type="submit">Save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
}

// validation des entrees:


playlistForm = reduxForm({
  form: 'playlist'
})(playlistForm);

const mapDispatchToProps = dispatch => (
  bindActionCreators({addPlaylist}, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(playlistForm));

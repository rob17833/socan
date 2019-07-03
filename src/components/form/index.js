/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm } from 'redux-form';
import {
  Form, Button, FormGroup, Container, Row, Col,
} from 'reactstrap';
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
    const {playlist_name, track1, track2, track3, track4} = this.state
    return (
      <Container>
        <Row>
          <Col xs={{ size: 8, offset: 2 }}>
            <Form onSubmit={this.handleRedirect}>
              <FormGroup>
                <input
                  id="playlistName"
                  type="text"
                  name="playlist_name"
                  placeholder="playlist"
                  className="form-control"
                  onChange={this.onChange}
                  value={playlist_name}
                />
              </FormGroup>
              <FormGroup>
                <input
                  id="track"
                  type="text"
                  name="track1"
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                  value={track1}
                />
              </FormGroup>
              <FormGroup>
                <input
                  id="track"
                  type="text"
                  name="track2"
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                  value={track2}
                />
              </FormGroup>
              <FormGroup>
                <input
                  id="track"
                  type="text"
                  name="track3"
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                  value={track3}
                />
              </FormGroup>
              <FormGroup>
                <input
                  id="track"
                  type="text"
                  name="track4"
                  placeholder="track"
                  className="form-control"
                  onChange={this.onChange}
                  value={track4}
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({addPlaylist}, dispatch)
)

export default withRouter(connect(null, mapDispatchToProps)(playlistForm));

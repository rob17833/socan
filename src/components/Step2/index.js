import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import './index.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Step2 extends React.Component {
    render() {
        console.log(this.props.playlist)
        const playlistNames = this.props.playlist.map( elem => (
            <option>{elem.playlist_name}</option>
        ))
        return (
            <Container>
                <Row>
                    <Col xs={{ size: 6, offset: 0 }}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Select Playlist</Label>
                                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                    {playlistNames}
                                </Input>
                            </FormGroup>
                            <Button to='step3' tag={NavLink}>Next</Button>
                        </Form>
                        <Button className="btn_createplaylist" to="form" tag={NavLink} outline size="lg" color="secondary"> + Create a playlist</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    playlist: state.form.playlist
})

export default connect(mapStateToProps)(Step2);
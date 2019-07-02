import React from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import './index.css';
import { NavLink } from 'react-router-dom';


class Step2 extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={{ size: 6, offset: 0 }}>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Select Playlist</Label>
                                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <Button to='step3' tag={NavLink}>Next</Button>
                        </Form>
                        <Button className="btn_createplaylist" outline size="lg" color="secondary"> + Create a playlist</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Step2;
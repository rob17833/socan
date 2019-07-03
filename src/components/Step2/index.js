import React from 'react';
import { Form, FormGroup, Label, Button, Container, Row, Col } from 'reactstrap';
import './index.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSelected } from '../../Action/index'
import { bindActionCreators } from '../../../../../../../Library/Caches/typescript/3.5/node_modules/redux';


class Step2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            playlist: []
        }
    }

    handleChange = (event) => {
        const id = event.target.value
        console.log(id)
        const selected = this.props.playlist.filter( elem => {
            return elem.playlist_name == id
        })
        this.setState({playlist: selected})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.playlist[0])
        this.props.addSelected(this.state.playlist[0])


    }

    render() {
        const playlistNames = this.props.playlist.map( elem => (
            <option>{elem.playlist_name}</option>
        ))
        return (
            <Container>
                <Row>
                    <Col xs={{ size: 6, offset: 0 }}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleSelectMulti">Select Playlist</Label><br></br>
                                <select onChange={this.handleChange} type="select" name="selectMulti">
                                    {playlistNames}
                                </select> 
                            </FormGroup>
                            <Button to='step3' type='submit' tag={NavLink}>Next</Button>
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({addSelected}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Step2);
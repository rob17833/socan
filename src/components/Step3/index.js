import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';

class Step3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: ""
    }
  }
  handleClick = () => {
    const url = 'http://localhost:5000/playlist/92221047';
    const config = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: {
        "playlist_name": "playlist1",
        "tracks": ["chanson1", "chanson2"]
      },
  }

  fetch(url, config)
    .then(res => res.json())
    .then(data => {
      this.setState({id: data.data.confirmationNo})
    })
  }
    render(){
      const {playlist_name, track1, track2 } = this.props.data
      console.log(this.props.data)
        return(
          <div>
            <p>{playlist_name}</p>
            <ul>
              <li>{track1}</li>
              <li>{track2}</li>
            </ul>
            <Button onClick={this.handleClick} size="lg" color="secondary">Confirm</Button>
            <h3>{this.state.id}</h3>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.form.playlist[0],
})


export default connect(mapStateToProps)(Step3);
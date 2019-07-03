import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';

class Step3 extends React.Component {
  handleClick = () => {
    const url = ''
  }
    render(){
      const {playlist_name, track} = this.props.data
      const listTracks = track.map(item => <li>{item}</li>)
        return(
          <div>
            <p>{playlist_name}</p>
            <ul>
              {listTracks}
            </ul>
            <Button onClick={this.handleClick} size="lg" color="secondary">Confirm</Button>
          </div>
        )
    }
}

const npq = (blabla) => ({
  data: blabla.form.playlist
})


export default connect(npq) (Step3);
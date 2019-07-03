import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';

class Step3 extends React.Component {
  handleClick = () => {
    const url = ''
  }
    render(){
      const {playlist_name, track1, track2} = this.props.data
      console.log(this.props.data)
        return(
          <div>
            <p>{playlist_name}</p>
            <ul>
              <li>{track1}</li>
              <li>{track2}</li>
            </ul>
            <Button onClick={this.handleClick} size="lg" color="secondary">Confirm</Button>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.form.playlist[0],
})


export default connect(mapStateToProps)(Step3);
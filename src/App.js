import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import FbLogin from './components/login/login';

class App extends Component {
  constructor(props){
  super(props);
    this.state=({
      isLogged: false
    });
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({isLogged: data});
  }//\end fct handleChange



render() {
    return (
      <div>
        {sessionStorage.getItem('fbToken') ? (
          <div>Logged</div>
        ) : (
          <FbLogin onChange={this.handleChange}/>
        )}
      </div>
    );
  }
}
export default App;

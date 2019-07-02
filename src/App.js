import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import FbLogin from './components/login/login';

class App extends Component {
  constructor(props){
  super(props);
    this.setState({
      isLogged: false
    });
  }
render() {
    return (
      <div>
        {sessionStorage.getItem('fbToken') ? (
          <div>Logged</div>
        ) : (
          <FbLogin/>
        )}
      </div>
    );
  }
}
export default App;

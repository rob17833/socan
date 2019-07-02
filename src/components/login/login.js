import React, { Component} from 'react';
import { FacebookProvider, Login } from 'react-facebook';

export default class FbLogin extends Component {
  constructor(props) {
    super(props);
}//\end constructor

  handleResponse = (data) => {
    sessionStorage.setItem('fbToken', data.tokenDetail.accessToken);
    console.log(sessionStorage.getItem('fbToken'))
    //call with : var data = sessionStorage.getItem('fbToken');
  }

  handleError = (error) => {
    this.setState({ error });
  }

  render() {
    return (
      <FacebookProvider appId="432650144242914">
        <Login
          scope="email"
          onCompleted={this.handleResponse}
          onError={this.handleError}
        >
          {({ loading, handleClick, error, data }) => (
            <span onClick={handleClick}>
              Login via Facebook
              {loading && (
                <span>Loading...</span>
              )}
            </span>
          )}
        </Login>
      </FacebookProvider>
    );
  }
}

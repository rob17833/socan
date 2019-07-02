import React from 'react';
import logo from './logo.svg';
import './App.css';
import FbLogin from './components/login/login';

function App() {
  return (
    <div>
      {sessionStorage.getItem('fbToken') ? (
        <div>Logged</div>
      ) : (
        <FbLogin />
      )}
    </div>
  );
}

export default App;

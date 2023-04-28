import React from 'react';
import './App.css';

function App() {
  const appName = process.env.REACT_APP_NAME;
  return (
    <h1>Welcome to {appName}</h1>
  );
}

export default App;

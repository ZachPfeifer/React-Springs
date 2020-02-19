import React from 'react';
import './App.css';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

function App() {
  state = {
    showComponent3: false
  }

  return (
    <div className="App">
      <h1>Welcome from App.js</h1>
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;

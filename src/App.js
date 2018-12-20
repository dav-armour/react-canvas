import React, { Component } from 'react';
import Canvas from './Components/Canvas';
import Heading from './Components/Heading';

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Canvas />
      </div>
    )
  }
}

export default App;
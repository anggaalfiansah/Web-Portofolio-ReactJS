import React, { Component } from 'react';
import Body from './components/Body';
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <div>
        <Loader />
        <Body />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { Calendar, Day } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calendar />
        <Day />
      </div>
    );
  }
}

export default App;

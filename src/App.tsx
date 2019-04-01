import React, { Component } from 'react';
import './App.css';
import {Matrix} from "./Matrix";

class App extends Component {
  render() {
    return (
      <Matrix
        rows={2}
        columns={3}
        handler={(val) => console.log(val)}
        initial={[[1,2],[2,3], [3,4]]}
      />
    );
  }
}

export default App;

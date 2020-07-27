import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

  render() {
    return (
        <h1>PokeDex</h1>
    );
  }
}


export default App;
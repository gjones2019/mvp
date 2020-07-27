import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            console.log('RES', res);
            this.setState({
                items: res.data
            })
        }).catch(err => console.log(err));
    }

  render() {
    return (
        <h1>PokeDex</h1>
    );
  }
}


export default App;
import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: {},
            caughtPokemon: [],
            allPokemon: [],
        }
        this.catchRelease = this.catchRelease.bind(this);
    }
//catch pokemon button (save)
//evolve pokemon (update)
//delete pokemon
// view caught pokemon
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            // console.log('RES', res);
            this.setState({
                allPokemon: res.data
            })
        }).catch(err => console.log(err));
    } 

    catchRelease(event) {
        console.log(event)
        console.log('current Pokemon')
        // this.setState({currentPokemon: event.target.value})
    }

  render() {
    return (
        <div>
        <h1>PokeDex</h1>
        <PokemonList {...this.state} onClick={this.catchRelease}/>
        </div>
    );
  }
}


export default App;
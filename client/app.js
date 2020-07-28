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
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
//catch pokemon button (save)
//delete pokemon (delete)
//evolve pokemon (update)
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

    handleClick(pokemon) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        console.log('current Pokemon chosen', pokemon)
        this.setState({currentPokemon: pokemon})
        if (!caughtPokemon.includes(currentPokemon)) {
            caughtPokemon.push(currentPokemon);
        } else {
            const filtered = caughtPokemon.filter(pokemon => pokemon !== currentPokemon);
            this.setState({caughtPokemon: filtered});
        }
    }

  render() {
      console.log(this.state.caughtPokemon)
    return (
        <div>
        <h1>PokeDex</h1>
        <PokemonList {...this.state} onClick={this.handleClick}/>
        </div>
    );
  }
}


export default App;
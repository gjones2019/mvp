import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.js';
import CaughtPokemon from './CaughtPokemon.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: {},
            caughtPokemon: [],
            allPokemon: [],
        }
        this.catchEm = this.catchEm.bind(this);
        this.releaseEm = this.releaseEm.bind(this);
        this.update = this.update.bind(this);
    }
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            this.setState({
                allPokemon: res.data
            })
        }).then(this.update()).catch(err => console.log(err));
    }

    update() {
        axios.get('http://localhost:8080/server/caught')
        .then(res => this.setState({caughtPokemon: res.data}))
        .catch(err => console.log(err))
    }

    catchEm(pokemon, index) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        this.setState({currentPokemon: pokemon}, () => (console.log('current Pokemon chosen')))

        if (!caughtPokemon.includes(pokemon)) {
            caughtPokemon.push(pokemon);
            allPokemon.results.splice(index, 1)
            this.setState({allPokemon: allPokemon});
            axios.post('http://localhost:8080/server/create', pokemon)
                .then((res) => {
                    console.log('Caught')
                }).catch((error) => {
                    console.log('error', error)
                });
        } else {
        null
        }
    }


    releaseEm(pokemon, index) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        const filtered = caughtPokemon.filter(char => char !== pokemon);
        allPokemon.results.splice(index, 0, pokemon);
        this.setState({caughtPokemon: filtered, allPokemon: allPokemon});
        axios.delete('http://localhost:8080/server/delete/'+ pokemon.name)
            .then((res) => {
                console.log('released')
            }).catch((error) => {
                console.log('error', error)
            })
    }

  render() {
    return (
        <div>
        <h1>PokeDex</h1>
        <PokemonList {...this.state} catchEm={this.catchEm}/>
        <CaughtPokemon {...this.state} releaseEm={this.releaseEm}/>
        </div>
    );
  }
}


export default App;
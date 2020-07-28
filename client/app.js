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
    }
//catch pokemon button (save)
//delete pokemon (delete)
//evolve pokemon (update)
    //new call to api with pokemon name on the end
// view caught pokemon
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            // console.log('RES', res)
            this.setState({
                allPokemon: res.data
            })
            //get from database in another .then
            //merge and update
        }).catch(err => console.log(err));
    }

    catchEm(pokemon, index) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        this.setState({currentPokemon: pokemon}, () => (console.log('current Pokemon chosen', pokemon)))

        if (!caughtPokemon.includes(pokemon)) {
            caughtPokemon.push(pokemon);
            allPokemon.results.splice(index, 1)
            this.setState({allPokemon: allPokemon});
                // const params = {id: pokemon.id, name: pokemon.name, url: pokemon.url}
            axios.post('http://localhost:8080/server/server', pokemon)
                .then((res, req) => {
                    console.log('RES.DATA', res)
                    console.log(req)
                }).catch((error) => {
                    console.log('error', error)
                });
        } else {
        null
        }
    }
        // axios.post('/create', caughtPokemon)
        // .then(res => console.log(res.data))
        // .catch(err => console.log('ERR in axios post', err));
    

    releaseEm(pokemon, index) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        const filtered = caughtPokemon.filter(char => char !== pokemon);
        allPokemon.results.splice(index, 0, pokemon);
        this.setState({caughtPokemon: filtered, allPokemon: allPokemon});
        console.log('released Pokemon chosen') 
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
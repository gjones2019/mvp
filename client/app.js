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
        // const myStorage = window.localStorage;
    }
//evolve pokemon (update)
    //new call to api with pokemon name on the end
// view caught pokemon
//pull caught pokemon from mongo and setState in componentDidMount
    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            // console.log('RES', res)
            // uniq = res.data.unique()
            this.setState({
                allPokemon: res.data
            })
            // if (this.caughtPokemon !== undefined) {
            //     this.caughtPokemon.forEach(caught => {
            //     if (this.allPokemon.includes(caught)){
            //         let filtered = this.allPokemon.filter(char => char !== caught)
            //         this.setState({allPokemon: filtered})
            //     }
            // })}
            //get from database in another .then
            //merge and update
        }).then(this.update()).catch(err => console.log(err));
    }

    update() {
        axios.get('http://localhost:8080/server/caught')
        .then(res => this.setState({caughtPokemon: res.data}))
        .catch(err => console.log(err))
    }

    catchEm(pokemon, index) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        this.setState({currentPokemon: pokemon}, () => (console.log('current Pokemon chosen', pokemon)))

        if (!caughtPokemon.includes(pokemon)) {
            caughtPokemon.push(pokemon);
            allPokemon.results.splice(index, 1)
            this.setState({allPokemon: allPokemon});
            // pokemon = {id: index, name: pokemon.name, url: pokemon.url}
            // console.log('pokemon to post', pokemon)
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
        console.log('released Pokemon chosen', pokemon)
        axios.delete('http://localhost:8080/server/delete/'+ pokemon.name)
            .then((res) => {
                console.log(res.data)
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
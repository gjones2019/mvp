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
        this.handleChange = this.handleChange.bind(this);
        this.updatePokemon = this.updatePokemon.bind(this);
    }
//catch pokemon button (save)
//delete pokemon (delete)
//evolve pokemon (update)
    //new call to api with pokemon name on the end
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

    updatePokemon(pokemon) {
        const { currentPokemon, caughtPokemon } = this.state;
        // event.preventDefault()
        console.log('POKEMON', pokemon)
        this.setState({currentPokemon: pokemon}, () => {
            if (!caughtPokemon.includes(pokemon)) {
                caughtPokemon.push(pokemon);
            } else {
            //     const filtered = caughtPokemon.filter(pokemon => pokemon !== currentPokemon);
            //     this.setState({caughtPokemon: filtered});
            null
            }
        })
    }


    handleChange(pokemon) {
        const { currentPokemon, caughtPokemon, allPokemon } = this.state;
        // this.setState({currentPokemon: pokemon})
        console.log('released Pokemon chosen')
            // const filtered = caughtPokemon.filter(pokemon => pokemon !== currentPokemon);
            // this.setState({caughtPokemon: filtered});
    }

  render() {
    //   console.log(this.state.caughtPokemon)
    return (
        <div>
        <h1>PokeDex</h1>
        <PokemonList {...this.state} updatePokemon={this.updatePokemon}/>
        <CaughtPokemon {...this.state} handleChange={this.handleChange}/>
        </div>
    );
  }
}


export default App;






import React from 'react';

const CaughtPokemon = (props) => {
    // console.log('PROSSSS', props)
    const{ allPokemon, onChange, currentPokemon, caughtPokemon } = props;
//get div button and li element by id?
    if (caughtPokemon === []) {
        console.log('no items to render to caught list')
        return null;
      } else {
    return (
    <div>
      <h4>Caught List</h4>
      <ul>
      {caughtPokemon.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onChange={() => handleChange(pokemon)}>Release</button>
        </div>
        )
        )}
      </ul>
    </div>
  );
}
    }

  export default CaughtPokemon








  import React from 'react';

const PokemonList = (props) => {
    const { allPokemon, updatePokemon, currentPokemon } = props;
    if (allPokemon.results) {
    return (
    <div>
      <h4>List</h4>
      <ul>
      {allPokemon.results.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onClick={() => updatePokemon(pokemon)}>Catch</button>
        </div>
        )
        )}
      </ul>
    </div>
  );
} else {
    console.log('no items to render to list')
    return null;
      }
    }

  export default PokemonList
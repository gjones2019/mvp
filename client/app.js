import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            items: [],
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
                items: res.data
            })
        }).catch(err => console.log(err));
    } 

    catchRelease() {
        console.log('WHOOOOOA')
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
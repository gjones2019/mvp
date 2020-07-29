import React, { Component } from 'react';
import axios from 'axios';

class Moves extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abilities: [],
            forms: [],
        }
        this.evolve = this.evolve.bind(this);
    }

    componentDidMount() {
        console.log(this.props.pokemon.name)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.index}`)
        .then(res => {
            this.setState({
                abilities: res.data.abilities,
                forms: res.data.forms,
                sprites: res.data.sprites,
            })
            console.log(this.state)
        }).catch(err => console.log(err));
    }

    evolve() {
        console.log('evolved');
    }

    render() {
        const { abilities, sprites, forms } = this.state;
        return (
        <div>
            <button onClick={this.evolve}>Evolve</button>{' '}
        </div>
        )
    }
}

    export default Moves;


// const Moves = (props) => {


//     return <h1>Hello, {props.name}</h1>;
//   }

//   export default Moves;
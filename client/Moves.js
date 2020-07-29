import React, { Component } from 'react';
import axios from 'axios';

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
        console.log(this.props.pokemon.name)
        const { value } = this.state
        //upgrade route
        axios.put('http://localhost:8080/server/upgrade/'+ this.props.pokemon.name, { name: value })
            .then((res) => {
                console.log('released')
            }).catch((error) => {
                console.log('error', error)
            })
	}
	// evolution(props) {
	// 	if (props.pokemon.name === 'bulbasaur' || 'ivysaur' || 'venusaur') {
	// 		props.pokemon.evolutionId = 1;
	//     }
	//     if (props.pokemon.name === 'charmander' || 'charmeleon' || 'charizard') {
	// 		props.pokemon.evolutionId = 2;
	//     }
	//     // if (props.pokemon.name === 'squirtle' || 'wartortle' || 'blastoise') {
	// 	// 	props.pokemon.evolutionId = 3;
	//     // }
	//     // if (props.pokemon.name === 'caterpie' || 'metapod' || 'butterfree') {
	// 	// 	props.pokemon.evolutionId = 4;
	//     // }
	//     // if (props.pokemon.name === 'weedle' || 'kakuna' || 'beedrill') {
	// 	// 	props.pokemon.evolutionId = 5;
	//     // }
	//     // if (props.pokemon.name === 'pidgey' || 'pidgeotto' || 'pidgeot') {
	// 	// 	props.pokemon.evolutionId = 6;
	//     // }
	//     // if (props.pokemon.name === 'rattata' || 'raticate' || 'spearow') {
	// 	// 	props.pokemon.evolutionId = 7;
	//     // }
	// }

	// evolve(props) {
	//     this.evolution(props)

	// 	const url = `https://pokeapi.co/api/v2/evolution-chain/${props.pokemon.evolutionId}?`;
	// 	axios
	// 		.get(url)
	// 		.then((res) => {
	// 			this.setState({name: res.data.chain.evolves_to[0].evolves_to[0].species.name})
	//             this.props.currentPokemon = res.data.chain.evolves_to[0].evolves_to[0].species.name
	//         })
	// 		.catch((err) => console.log(err));
	// }

	// componentDidUpdate(props) {
	//     if (this.state.name !== '') {
	//       this.render();
	//     }
	//   }

	render() {

		const { evolved } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Give new name:
						<input
							type='text'
							value={this.state.value}
							onChange={this.handleChange}
						/>
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}

export default Moves;

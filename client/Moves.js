import React, { Component } from 'react';
import axios from 'axios';

class Moves extends Component {
	constructor(props) {
		super(props);
		this.state = {
            value: '',
		};
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
        event.preventDefault();
        const { value } = this.state
        axios.put('http://localhost:8080/server/upgrade/'+ this.props.pokemon.name, { name: value })
            .then((res) => {
                console.log('released')
            }).catch((error) => {
                console.log('error', error)
            })
        }

	render() {
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

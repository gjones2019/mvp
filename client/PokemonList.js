import React from 'react';

const PokemonList = (props) => {
    // const { name, balance } = props.user
    console.log(props)
    const{ items } = props;
    if (items.results) {
    return (
    <div>
      <h4>List</h4>
      <ul>
      {items.results.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
} else {
    console.log('no results')
    return null;
      }
    }

  export default PokemonList
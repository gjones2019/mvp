import React from 'react';

const PokemonList = (props) => {
    console.log('PROSSSS', props)
    const{ allPokemon, onClick } = props;
    if (allPokemon.results) {
    return (
    <div>
      <h4>List</h4>
      <ul>
      {allPokemon.results.map(pokemon => (
        <div>
            <li key={pokemon.name}>{pokemon.name}</li>
            <button onClick={onClick} >Catch/Release</button>
            </div>
        ))}
      </ul>
    </div>
  );
} else {
    console.log('no items to render to list')
    return null;
      }
    }

  export default PokemonList
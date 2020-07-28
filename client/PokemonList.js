import React from 'react';

const PokemonList = (props) => {
    const { allPokemon, onClick, currentPokemon } = props;
    if (allPokemon.results) {
    return (
    <div>
      <h4>List</h4>
      <ul>
      {allPokemon.results.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onClick={() => onClick(pokemon)}>Catch</button>
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
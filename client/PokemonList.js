import React from 'react';

const PokemonList = (props) => {
    const { allPokemon, catchEm, currentPokemon } = props;
    if (allPokemon.results) {
    return (
    <div>
      <h4>Wild Pokemon</h4>
      <ul>
      {allPokemon.results.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onClick={() => catchEm(pokemon, index)}>Catch</button>
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
import React from 'react';

const PokemonList = (props) => {
    // console.log('PROSSSS', props)
    const{ allPokemon, onClick, currentPokemon } = props;
//get div button and li element by id?
    if (allPokemon.results) {
    return (
    <div>
      <h4>List</h4>
      <ul>
      {allPokemon.results.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onClick={() => onClick(pokemon)}>Catch/Release</button>
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
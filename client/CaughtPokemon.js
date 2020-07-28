import React from 'react';

const CaughtPokemon = (props) => {
    // console.log('PROSSSS', props)
    const{ allPokemon, onChange, currentPokemon, caughtPokemon } = props;
//get div button and li element by id?
    if (caughtPokemon) {
    return (
    <div>
      <h4>Caught List</h4>
      <ul>
      {caughtPokemon.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <button onChange={() => onChange(pokemon)}>Release</button>
        </div>
        )
        )}
      </ul>
    </div>
  );
} else {
    console.log('no items to render to caught list')
    return null;
      }
    }

  export default CaughtPokemon
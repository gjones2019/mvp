import React from 'react';
import Moves from './Moves.js';

const CaughtPokemon = (props) => {
    const{ allPokemon, releaseEm, currentPokemon, caughtPokemon } = props;
    if (caughtPokemon.length >= 1) {
    return (
    <div>
      <h4>Caught List</h4>
      <ul>
      {caughtPokemon.map((pokemon, index) =>
        (
        <div>
            <li key={index}>{pokemon.name}</li>
            <img src={`public/sprites/${pokemon.name}.png`} />
            <button onClick={() => releaseEm(pokemon, index)}>Release</button>
            <Moves pokemon={pokemon} index={index} {...props}/>
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
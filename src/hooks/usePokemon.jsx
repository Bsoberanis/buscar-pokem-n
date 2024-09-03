import { useState, useEffect } from 'react';
import { getPokemonByNameOrId } from '../services/Pokemonservice';

const usePokemon = (query) => {
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            getPokemonByNameOrId(query)
                .then(setPokemon)
                .catch(setError);
        }
    }, [query]);

    return { pokemon, error };
};

export default usePokemon;




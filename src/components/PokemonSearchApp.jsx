import React, { useState } from 'react';
import usePokemon from '../hooks/usePokemon';
import PokemonDetails from './PokemonDetails';
import './index.css'; 

const PokemonSearchApp = () => {
    const [query, setQuery] = useState('');
    const { pokemon, error } = usePokemon(query);

    return (
        <div className="container">
            <PokemonSearch onSearch={setQuery} />
            {error ? <div>{error.message}</div> : <PokemonDetails pokemon={pokemon} />}
        </div>
    );
};

const PokemonSearch = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSearch = () => {
        onSearch(inputValue.trim().toLowerCase());
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingrese el nombre "
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
};

export { PokemonSearchApp };







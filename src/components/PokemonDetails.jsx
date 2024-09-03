import React, { useEffect, useState } from 'react';
import { getTypeFromIdOrName } from '../services/Pokemonservice';

const PokemonDetails = ({ pokemon }) => {
    const [region, setRegion] = useState('');
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (pokemon) {
            if (pokemon.location_area) {
                getRegionFromLocations(pokemon.location_area).then(setRegion);
            }
            getTypeFromIdOrName(pokemon.id).then(setTypes);
        }
    }, [pokemon]);

    if (!pokemon) {
        return <div>No se encontró ningún Pokémon</div>;
    }

    const { name, id, sprites, abilities, stats, types: pokemonTypes } = pokemon;

    return (
        <>
            <h2>{name} (ID: {id})</h2>
            <img src={sprites.front_default} alt={name} />
            <h3>Habilidades:</h3>
            <ul>
                {abilities.map(({ ability }) => (
                    <li key={ability.name}>{ability.name}</li>
                ))}
            </ul>
            <h3>Estadísticas:</h3>
            <ul className="stats-list">
                {stats.map(({ stat, base_stat }) => (
                    <li key={stat.name}>
                        {stat.name.replace('-', ' ')}: {base_stat}
                    </li>
                ))}
            </ul>
            <h3>Tipos:</h3>
            <ul>
                {pokemonTypes.map((typeInfo) => (
                    <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                ))}
            </ul>
            
            
            
            
        </>
    );
};

export default PokemonDetails;








const API_BASE_URL = 'https://pokeapi.co/api/v2/';
const POKEMON_URL = `${API_BASE_URL}pokemon/`;
const COLOR_URL = `${API_BASE_URL}pokemon-color/`;
const HABITAT_URL = `${API_BASE_URL}pokemon-habitat/`;
const STATS_URL = `${API_BASE_URL}stat/`;
const TYPE_URL = `${API_BASE_URL}type/`;

export const getPokemonByNameOrId = async (query) => {
    const response = await fetch(`${POKEMON_URL}${query}`);
    if (!response.ok) {
        throw new Error('No se encontró el Pokémon');
    }
    const data = await response.json();
    return data;
};



export const getColorFromIdOrName = async (idOrName) => {
    const response = await fetch(`${COLOR_URL}${idOrName}/`);
    if (!response.ok) {
        throw new Error('No se encontró el color');
    }
    const data = await response.json();
    return data.name;
};

export const getHabitatFromIdOrName = async (idOrName) => {
    const response = await fetch(`${HABITAT_URL}${idOrName}/`);
    if (!response.ok) {
        throw new Error('No se encontró el hábitat');
    }
    const data = await response.json();
    return data.name;
};

export const getStatsFromIdOrName = async (idOrName) => {
    const response = await fetch(`${STATS_URL}${idOrName}/`);
    if (!response.ok) {
        throw new Error('No se encontraron las estadísticas');
    }
    const data = await response.json();
    return data.stats;
};

export const getTypeFromIdOrName = async (idOrName) => {
    const response = await fetch(`${TYPE_URL}${idOrName}/`);
    if (!response.ok) {
        throw new Error('No se encontraron los tipos');
    }
    const data = await response.json();
    return data.types.map(typeInfo => typeInfo.type.name);
};














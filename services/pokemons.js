import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export function getPokemon ( ) {
    return axios.get(baseUrl).then( resp => resp.data )
}

export function getPokemonById ( id ) {
    return axios.get(`${baseUrl}/${id}`).then( resp => resp.data )
}
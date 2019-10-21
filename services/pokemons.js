import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

// export function getPokemon ( ) {
//     return axios.get(baseUrl).then( resp => resp.data )
// }

// export function getPokemonById ( id ) {
//     return axios.get(`${baseUrl}/${id}`).then( resp => resp.data )
// }


export function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => res.data)
            .then(data => {
                resolve(data)
            })
    });
}

export function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => res.data)
            .then(data => {
                resolve(data)
            })
    });
}

export async function loadPokemon (data) {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon)
        return pokemonRecord
    }))
    return _pokemonData;
}
import { ACTIONS } from "../constants/PokemonConstants";

const initialState = {
    pokemon: [],
    pokemons: {},
    next: '',
    previous: '',
    isLoad: false
}

const pokemonReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { pokemon, pokemons, isLoad } = state;

    switch (type) {
        case ACTIONS.GET:
            return { 
                ...state, 
                pokemon: payload.results, 
                isLoad: true,
                next: payload.next,
                previous: payload.previous
            };
        case ACTIONS.GET_ALL: 
            return { ...state, pokemons: payload, isLoad: true };
        case ACTIONS.NEXT: 
            return { ...state, next: payload.next, isLoad: true };
        case ACTIONS.PREVIOUS: 
            return { ...state, previous: payload.previous, isLoad: true };
        default:
            return state;
    }
};

export default pokemonReducer;

// pokemon: [ ...pokemon, payload.results ] aqui adiciono o array no array

// pokemon: payload.results  -> aqui no array existente 

// pokemon: pokemon, ...payload.results -> aqui crio um novo array dento do state
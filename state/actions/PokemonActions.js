import { ACTIONS } from "../constants/PokemonConstants";

const pokemonsActions = {
    get: ( pokemon ) => ({
        payload: pokemon,
        type: ACTIONS.GET
    }),
    getAll: ( pokemon ) => ({
        payload: pokemon,
        type: ACTIONS.GET_ALL
    })
}

export { pokemonsActions }
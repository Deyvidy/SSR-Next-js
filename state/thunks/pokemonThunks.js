import { getPokemon } from '../../services/pokemons';
import { pokemonsActions } from '../actions/PokemonActions'

const pokemonThunks = {
    getAll: ( ) => dispatch => {
        getPokemon().then( pokemon => dispatch( pokemonsActions.get( pokemon ) ) )
    }
}

export { pokemonThunks };

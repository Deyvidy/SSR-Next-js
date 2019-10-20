import { combineReducers } from 'redux'
import AuthReducer  from './AuthReducer';
import PokemonReducer from './PokemonReducer';

const reducers = combineReducers({
    AuthReducer,
    PokemonReducer
})

export { reducers }
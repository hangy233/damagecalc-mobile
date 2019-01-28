import { combineReducers } from 'redux';
import pokemons from './pokemons';
import field from './field';
import settings from './settings';

const app = combineReducers({
  pokemons,
  field,
  settings,
});

export default app;

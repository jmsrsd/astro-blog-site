import template from './pokemons.html';
import Mustache from 'mustache';

export const createPokemonsElement = function (
  endpoint: string | null | undefined,
) {
  return Mustache.render(template({}), {
    endpoint,
  });
};

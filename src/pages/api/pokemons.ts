import { stringified as PokemonsLoader } from '../../components/PokemonsLoader';
import { stringified as PokemonTile } from '../../components/PokemonTile';

import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const { url } = context;

  const { searchParams } = url;

  const params = (key: string) => searchParams.get(key);

  const offset = +(params('offset') ?? '0');

  const limit = +(params('limit') ?? '100');

  const endpoint = new URL('https://pokeapi.co/api/v2/pokemon');

  endpoint.searchParams.set('offset', `${offset}`);

  endpoint.searchParams.set('limit', `${limit}`);

  const options = { method: 'GET' };

  const response = await fetch(endpoint.toString(), options);

  const data = await response.json();

  const pokemons = data.results as any[];

  const results = pokemons.map(PokemonTile);

  if (!!data.next) {
    const endpoint = new URL(`${data.next}`);

    const params = (key: string) => endpoint.searchParams.get(key);

    const offset = +(params('offset') ?? '0');

    const limit = +(params('limit') ?? '100');

    results.push(PokemonsLoader({ offset, limit }));
  }

  return new Response(results.join(''));
}

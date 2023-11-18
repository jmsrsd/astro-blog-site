import { renderToString } from 'react-dom/server';

export type PokemonsLoaderProps = {
  offset?: number;
  limit?: number;
};

export default function PokemonsLoader({ offset, limit }: PokemonsLoaderProps) {
  return (
    <div
      hx-get={`/pokemon/api/pokemons?offset=${offset ?? 0}&limit=${
        limit ?? 20
      }`}
      hx-swap="outerHTML"
      hx-trigger="intersect once"
      className="tw-flex tw-flex-row tw-items-center tw-gap-4"
    >
      <img
        className="tw-h-8 tw-w-8 tw-object-cover tw-object-center"
        src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg"
      />
      <p id="pokemon-loading-indicator" className="tw-text-md tw-truncate">
        Loading...
      </p>
    </div>
  );
}

export function stringified(props: PokemonsLoaderProps) {
  return renderToString(<PokemonsLoader {...props} />);
}

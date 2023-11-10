import { renderToString } from 'react-dom/server';

export type PokemonsLoaderProps = {
  offset?: number;
  limit?: number;
};

export default function PokemonsLoader({ offset, limit }: PokemonsLoaderProps) {
  return (
    <div
      hx-get={`/api/pokemons?offset=${offset ?? 0}&limit=${limit ?? 100}`}
      hx-swap="outerHTML"
      hx-trigger="intersect once delay:300ms"
      className="tw-flex tw-flex-row tw-items-center tw-gap-4"
    >
      <img
        className="tw-h-8 tw-w-8 tw-object-cover tw-object-center"
        src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-10.jpg"
      />
      <p className="tw-text-md tw-truncate">Loading...</p>
    </div>
  );
}

export function stringified(props: PokemonsLoaderProps) {
  return renderToString(<PokemonsLoader {...props} />);
}

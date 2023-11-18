import { renderToString } from 'react-dom/server';

export type PokemonTileProps = {
  url: string;
  name: string;
};

export default function PokemonTile(props: PokemonTileProps) {
  const { url, name } = props;

  const resources = url
    .split('/')
    .map((e) => e.trim())
    .filter((e) => e !== '');

  const id = resources[resources.length - 1];

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <a href={url} className="tw-flex tw-flex-row tw-items-center tw-gap-4">
      <img
        className="tw-h-8 tw-w-8 tw-object-contain tw-object-center"
        src={image}
      />
      <div className="tw-text-md tw-truncate">{name}</div>
    </a>
  );
}

export function stringified(props: PokemonTileProps) {
  return renderToString(<PokemonTile {...props} />);
}

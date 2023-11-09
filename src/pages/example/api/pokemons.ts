import type { APIContext } from 'astro';
import view from '../../../templates/example/hello.html';
import Mustache from 'mustache';
import { createPokemonsElement } from '../../../templates/example/createPokemonsElement';

export async function GET(context: APIContext) {
  const { url } = context;

  const { searchParams } = url;

  const results = searchParams.getAll('results').map((e) => JSON.parse(e));

  const next = searchParams.get('next');

  const html = [
    ...results.map(({ url, name }) => {
      const urlParts = (url as string)
        .split('/')
        .map((e) => e.trim())
        .filter((e) => e !== '');

      const id = +urlParts[urlParts.length - 1];

      const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return [
        `<a`,
        `  href="${url}"`,
        `  class="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-center tw-gap-4"`,
        `>`,
        `  <img src="${imgSrc}" class="tw-object-center tw-object-contain tw-max-w-[6rem] tw-max-h-[6rem] tw-w-full tw-h-full" />`,
        `  <div class="tw-flex tw-flex-none">${name}</div>`,
        `</a>`,
      ]
        .map((e) => e.trim())
        .join(' ');
    }),
    `${next}` === `null` ? `` : createPokemonsElement(next),
  ]
    .map((e) => e.trim())
    .join('');

  return new Response(html, {
    headers: {
      'content-type': 'text/plain',
    },
  });
}

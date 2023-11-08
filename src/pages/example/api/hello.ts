import type { APIContext } from 'astro';
import view from '../../../templates/example/hello.html';
import Mustache from 'mustache';

export async function GET(context: APIContext) {
  const html = Mustache.render(view({}), {
    child: `Right now is ${new Date()}`,
    color: {
      r: Math.random() * 128 + 127,
      g: Math.random() * 128 + 127,
      b: Math.random() * 128 + 127,
    },
  });

  return new Response(html, {
    headers: {
      'content-type': 'text/html',
    },
  });
}

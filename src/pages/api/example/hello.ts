import renderHtml from '../../../templates/example/hello.html';

export async function GET({ params, request }) {
  var html = renderHtml({});

  html = html.replace(':first', 'Foo');
  html = html.replace(':second', 'Ipsum');

  return new Response(html);
}

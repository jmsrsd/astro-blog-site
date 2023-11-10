import { JSDOM } from 'jsdom';

export default function parseDOM(source: string): Element {
  const DOMParser = new JSDOM().window.DOMParser;

  return new DOMParser().parseFromString(source, 'text/html').body
    .firstChild as Element;
}

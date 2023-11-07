declare module '*.html' {
  const content: (slot) => string;
  export default content;
}

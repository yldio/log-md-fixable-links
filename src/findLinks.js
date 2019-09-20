const marked = require('marked');

const findLinks = mdx => {
  let links = [];
  const renderer = new marked.Renderer();

  renderer.link = (href, title, text) => {
    links.push({ href, title, text });
  };

  marked(mdx, { renderer: renderer });

  return links;
};

module.exports = findLinks;

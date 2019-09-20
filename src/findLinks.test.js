const findLinks = require('./findLinks');

it('findLinks() gets links from markdown file', () => {
  const mdx = '[first](http://example.com) and [second](http://example2.com)';

  expect(findLinks(mdx)).toEqual([
    { href: 'http://example.com', title: null, text: 'first' },
    { href: 'http://example2.com', title: null, text: 'second' },
  ]);
});

const findSrcData = require('./findSrcData');

describe('findSrcData()', () => {
  it('should identify not found string in HTML content', async () => {
    const links = [
      {
        href: 'http://example.com',
        title: null,
        text: 'first',
        statusCode: 200,
        body: 'Data not found',
      },
    ];

    const result = await findSrcData(links);
    expect(result).toEqual([
      {
        ...links[0],
        broken: true,
        containsNotFound: true,
      },
    ]);
  });

  it('should identify link as not broken if HTTP both test and src test do not fail', async () => {
    const links = [
      {
        href: 'http://example.com',
        title: null,
        text: 'first',
        statusCode: 200,
        body: 'Some Data',
      },
    ];

    const result = await findSrcData(links);
    expect(result).toEqual([
      {
        ...links[0],
        broken: false,
        containsNotFound: false,
      },
    ]);
  });
});

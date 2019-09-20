const nock = require('nock');
const findHTTPData = require('./findHTTPData');

describe('findHTTPData()', () => {
  it('should identify broken HTTP links that return not found', async () => {
    const links = [{ href: 'http://example.com', title: null, text: 'first' }];

    nock('http://example.com')
      .get('/')
      .reply(404);

    const result = await findHTTPData(links);
    expect(result).toEqual([
      {
        href: 'http://example.com',
        title: null,
        text: 'first',
        statusCode: 404,
        broken: true,
      },
    ]);
  });

  it('should save the body of found HTTP links', async () => {
    const links = [{ href: 'http://example.com', title: null, text: 'first' }];

    nock('http://example.com')
      .get('/')
      .reply(200, 'Something');

    const result = await findHTTPData(links);
    expect(result).toEqual([
      {
        href: 'http://example.com',
        title: null,
        text: 'first',
        statusCode: 200,
        body: 'Something',
      },
    ]);
  });
});

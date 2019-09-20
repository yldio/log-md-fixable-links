// Identifies Not Found Links using HTTP codes
const got = require('got');

const findHTTPData = async links => {
  let httpLinks = [];

  await Promise.all(
    links.map(async link => {
      try {
        const response = await got(link.href);
        httpLinks.push({
          ...link,
          statusCode: response.statusCode,
          body: response.body,
        });

        return response.statusCode;
      } catch (err) {
        httpLinks.push({
          ...link,
          statusCode: err.statusCode,
          broken: true,
        });

        return err.statusCode;
      }
    }),
  );

  return httpLinks;
};

module.exports = findHTTPData;

const findLinks = require('./findLinks');
const findHTTPData = require('./findHTTPData');
const findSrcData = require('./findSrcData');
const screenshotImages = require('./screenshotImages');
const printBrokenLinks = require('./print');

const logFixableLinks = async file => {
  const allLinks = findLinks(file);

  const httpDataLinks = await findHTTPData(allLinks); // gets http code
  const linksWithSrc = await findSrcData(httpDataLinks); // if 200, checks body

  const result = await screenshotImages(linksWithSrc);

  printBrokenLinks(result);
};

module.exports = logFixableLinks;

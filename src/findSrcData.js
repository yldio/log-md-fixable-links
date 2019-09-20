// Identifies broken links by trying to load them and finding "Not found" string in HTML text
// e.g. this occours a lot when links change in documentation
// could find false positives, so we also save an image

const NOT_FOUND_STR = 'not found';
const MIN_CHAR = 0;
const MAX_CHAR = 250; // usually not found message is included in the first chars

const findSrcData = async links => {
  let sourcedLinks = [];

  links.forEach(link => {
    let containsNotFound;
    const { body, broken } = link;

    if (!broken && body) {
      const bodyMin = body.substring(MIN_CHAR, MAX_CHAR).toLowerCase();
      containsNotFound = bodyMin.includes(NOT_FOUND_STR);
    }

    sourcedLinks.push({
      ...link,
      containsNotFound,
      broken: broken ? broken : containsNotFound,
    });
  });

  return sourcedLinks;
};

module.exports = findSrcData;

// saving the image is an heavy operation, it could be an option

const puppeteer = require('puppeteer');
const OUTPUT_FOLDER = './output/';

const screenshotImages = async links => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  links.forEach(async ({ href, text, broken, containsNotFound }) => {
    if (broken && containsNotFound) {
      await page.goto(href);
      await page.screenshot({ path: `${OUTPUT_FOLDER}/${text}.png` });
    }
  });

  await browser.close();

  return links;
};

module.exports = screenshotImages;

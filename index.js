const path = require('path');
const fs = require('mz/fs');
const logFixableLinks = require('./src');

const MDX_EXTENSION = '.md';
const fileName = process.argv[2];

(async () => {
  if (!fileName || path.extname(fileName) !== MDX_EXTENSION) {
    throw new Error('Markdown file missing');
  }

  const file = await fs.readFile(fileName, 'utf8');
  logFixableLinks(file);
})();

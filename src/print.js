const printBrokenLinks = links => {
  let brokenLinksNumber = 0;
  links.forEach(({ href, statusCode, containsNotFound, broken }) => {
    if (broken) {
      let message;
      const code = statusCode && `(${statusCode})`;

      if (containsNotFound) {
        message = `❓Possible broken link: ${href} ${code} (HTML contains Not Found)`;
      } else {
        message = `🔥 New broken link: ${href} ${code}`;
      }

      console.log(message);

      brokenLinksNumber++;
    }
  });

  if (!brokenLinksNumber) {
    console.log('🤟 No broken links. All good.');
  } else {
    console.log(
      '⚡️ If there was any "Possible broken link" plese check output folder to confirm.',
    );
  }
};

module.exports = printBrokenLinks;

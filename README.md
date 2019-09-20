### Markdown fixable links logger:

Aims to analyse markdown files and check if the URLs inside it do not return Not Found content:

- requests the file and checks the http method;
- for the files that were fine, they might still have "not found" in the HTML body. We check that and we take a snapshot which is added to `output` folder. With the snapshot we can confirm that if the string 'Not found' was really an issue or just random text.

#### Usage

`yarn`

`node index.js <file.md>`

#### Use case

Check markdown links for each YLD course lesson.

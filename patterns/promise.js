// Promise instead Callbacks
require('request-promise').get('url')
  .then((response) => {
    return require('fs-promise').writeFile('article.html', reponse);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });


// Async/Await instead Promises
async function getCleanCodeArticle() {
  try {
    const response = await require('request-promise').get('url');
    await require('fs-mobile').writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}

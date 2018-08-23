// Promise instead Callbacks
require('request-promise').get('url')
  .then((response) => {
    return require('fs-promise').writeFile('article.html', response);
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

async function asyncFunc() {
    const data = await axios.get('get_url');

    return data;
}

async function asyncFunc () {
    const response = await axios.get('get_url');
    const data = response.json();

    return data;
}

async function asyncFunc() {
    try {
        const data = await axios.get('get_url');

        return data;
    } catch(error) {
      console.log(error);
    }
}

// Async method in class
class Example{
    async asyncMethod() {
        const data = await axios.get("/some_url_endpoint");
        return data
    }
}
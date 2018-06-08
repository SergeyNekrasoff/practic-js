// Scotch Curry and Partial Application
// Объяснение как работает каррирование
let add = x => y => x + y

let incr = add(1)

incr(2) // 3


function buildUri (sheme, domain, path) {
  return `${sheme}://${domain}/${path}`
}

const build = buildUri('https', 'twitter.com', 'favicon.ico')

console.log(`${build}`)

// Partial Application
function fixUriScheme (scheme) {
  console.log(scheme)
  return function buildUriWithProvidedScheme (domain, path) {
    console.log(`other: ${scheme, domain, path}`)
    return buildUri(scheme, domain, path)
  }
}

const buildHttpsUri = fixUriScheme('https')

// Тоже самое только с помощью обектов
class UriBuilder {
  constructor (scheme) {
    this.scheme = scheme
  }

  buildUri (domain, path) {
    return `${this.scheme}://${domain}/${path}`
  }
}

const httpsUriBuilder = new UriBuilder('https')
const twitterFavicon = httpsUriBuilder.buildUri('twitter.com', 'favicon.ico')

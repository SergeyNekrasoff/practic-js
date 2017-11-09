// General Design Patterns
// Emulation Class or Constructor
function Parent(name) {
  this.name = name || '';
}

Parent.prototype.say = function() {
  return this.name;
}

function Child() {}

inherit(Child, Parent);

// Classic Example 1
function inherit(C, P) {
  C.prototype = new P();
}

// Classic Example 2
function Child(a, b, c, d) {
  Parent.apply(this, arguments);
}

var kid = new Child('Patrick');
kid.name; // Patrick
typeOf kid.say; // undefined

    // --------------------------
    // Exercise 1
    function Article() {
      this.tags = ['js', 'css'];
    }

    var article = new Article();
    function BlogPost() {}

    BlogPost.prototype = article;
    var blog = new BlogPost();

    function StaticPage() {
      Article.call(this);
    }

    var page = new StaticPage();

    console.log(article.hasOwnProperty('tags')); // true
    console.log(blog.hasOwnProperty('tags')); // false
    console.log(page.hasOwnProperty('tags')); // true

    blog.tags.push('html');
    page.tags.push('php');
    alert(article.tags.join(', ')); // js, css, html

// Classic Example 3
function Child(name) {
  Parent.apply(this, arguments);
}

Child.prototype = new Parent();

var kid = new Child('Patrick');
kid.name; // Patrick
kid.say(); // Patrick
delete kid.name
kid.say(); // Adam

// Classic Example 4
function inherit(C, P) {
  C.prototype = P.prototype;
}

// Classic Example 5
function inherit() {
  var F = function () {};

  F.prototype = P.prototype;
  C.prototype = new F();
}


// Pattern deep copy properties of Object
function (parent, child) {
  var i,
      toStr = Object.prototype.toString,
      astr = ['object Array'];

      child = child || {};

      for (i in parent) {
        if (parent.hasOwnProperty(i)) {
          if (typeof parent[i] === 'object') {
            child[i] = (toStr.call(parent[i])) ? [] : {};
            extendDeep(parent[i], child[i])
          } else {
            child[i] = parent[i];
          }
        }
      }

      return child;
}

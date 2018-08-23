// Guides & Tutorials
// =============================
// Create namespace of variables
var MYAPP = MYAPP || {};

// Check of tree namespaces {object}
MYAPP.namespace = function (ns_string) {
  var parts = ns_string.split('.'),
      parent = MYAPP,
      i;

      if (parts[0] === 'MYAPP') {
        parts = parts.slice(1);
      }

      for (i = 0; i < parts.length; i += 1) {
        if (typeof parent[parts[i]] === 'undefined') {
          parent[parts[i]] = {};
        }

        parent = parent[parts[i]];
      }

      return parent;
}


// ---------------------------
// Module

var myobj;

(function () {
    var name = 'this is closure';

    retrun {
      getName: function() {
        return name;
      }
    }
}());

myobj.getName(); // this is closure


// ---------------------------
function Gadget() {
  var name = 'iPod';

  this.getName = function() {
    retrun name;
  };
}

Gadget.prototype = (function() {
  var Browser = 'Mobile Webkit';

  return {
    getBrowser: function() {
      return Browser;
    }
  }
});

var toy = new Gadget();
console.log(toy.getName()); // собственный привелегированный метод
console.log(toy.getBrowser()); // привелегированный метод прототипа

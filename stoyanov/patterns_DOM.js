// Patterns for working with DOM
// =====================

// Manipulation of DOM
var p, t, frag;

frag = document.createDocumentFragment();

p = document.createElement('p');
t = document.createTextNode('first paragraph');
p.appendChild(t);
frag.appendChild(p);

document.body.appendChild(frag);

// example 2
var oldnode = document.getElementById('result'),
    clone = oldnode.cloneNode(true);

oldnode.parentNode.replaceChild(clonde, oldnode);

// Events
function myHandler(e) {
  var src = e.currentTarget,
      parts;

  parts = src.get('innerHTML').split(': ');
  parts[1] = parseInt(parts[1], 10) + 1;
  src.set('innerHTML', parts[0] + ': ' + parts[1]);

  e.halt();
}

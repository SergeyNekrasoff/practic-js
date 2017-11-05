/*
  Title: Access to the Global Object
  Descr: access the global object without hard-codin the identifier window
*/

var global = (function() {
  return this || (1, eval)('this');
}());

console.log(global);

var str = 'Lorem ipsum dolor sit amet.';
var str2 = 'Lorem.';

var func = function func(str) {
  return str.split('');
}

console.log(func(str2));

var jstr = '{"mykey": "my value"}';

var data = JSON.parse(jstr);

console.log(data.mykey);

var greet1 = 'Hello there';

greet1.split(' ')[0];

greet1.smile = true;

console.log(typeof greet1.smile);

var greet = new String('Hello World');

greet.split(' ')[0];

greet.smile = true;

console.log(typeof greet.smile);

var frag = document.createDocumentFragment();

$.each(reallyLongArray, function(count, item) {
  var newLi = $('<li>' + item + '</li>');
  frag.appendChild(newLi[0]);
});

$("#ballers")[0].appendChild(frag);

var $photo;

$('.list-item').click(function() {
  $photo = $photo || $('.photo');
  $photo.hide();
});

// antipattern
var arms = $('div.robotarm', '#container');
$('.reply_form', $(this).closest('.comment')).hide();

// // pattern
var arms = $('#container').find('div.robotarm');
$(this).closest('.comment').find('.reply_form').hide();

// antipattern
$(elem).data(key, value);

// pattern
$.data(elem, key, value);

// ========================
// Scotch.io
// ========================

// Data Encapsulation
(function() {
  var foo;
  foo = 0;

  function MyClass() {
    foo += 1;
  }

  MyClass.prototype = {
    howMany: function() {
      return foo;
    }
  }

  window.MyClass = My.Class;
}());

// OOP
function count() {
  var i = 0;

  return {
    increment: function () { ++i },
    decrement: function () { --i },
    get: function() { return i },
    reset: function () { i = 0 }
  }
}


// Namespaces private functions
var houseRent = (function() {
  var rent = 1000;

  function changeBy(amount) {
    rent += amount;
  }

  return {
    raise: function() {
      changeBy(100);
    },

    lower: function() {
      changeBy(-100);
    },

    currentAmount: function() {
      return rent;
    }
  }
}());

alert(houseRent.currentAmount()); // 1000$
houseRent.raise();
houseRent.lower();
alert(houseRent.currentAmount()); // 900$
houseRent.chaneBy(500); // TypeError: undefined is not function

// // Map
Array.prototype.map = function(callback) {
  var i,
  arr = [];

  for (i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }

  return arr;
}

// Filter
Array.prototype.filter = function(callback) {
  var arr = [],
      i;

  for (i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
}

// This
// =========

// Global binding
function printName() {
  console.log(this.name);
}

var name = 'Global';

printName(); // Global
// -----

function printName() {
  'use strict';
  console.log(this.name);
}

var name = 'Global';

printName(); // Undefined


// Implicit binding
var company = {
  name: 'Google',
  printName: function printName() {
    console.log(this.name);
  }
}

var name = 'Scotch';
company.printName(); // Google

var printNameAgain = company.printname;
printNameAgain(); // Scotch


// Explicit binding
var company = {
  name: 'Local',
  printName: function printName() {
    console.log(this.name);
  }
}

var name = 'Global';
var printNameAgain = company.printName; // Global

printNameAgain.call(company); // Local

// Explicit binding with parameters
var company = {
  name: 'Local',
  printName: function printName(prefix, suffix) {
    console.log(prefix + this.name + suffix);
  }
}

var name = 'Global';
var printNameAgain = company.printName; // Global

printNameAgain.call(company, 'pre ', ' post'); // pre Local post

// bind
var printFunc = printNameAgain.bind(company);
// Then you can call the returned function when needed:
printFunc('pre ', 'post'); // pre Local post


// Constructor Calls
function Company() {
  // var this = {};
  this.name = 'Scotch';
  // return this;
}

Company.prototype.getName = function() {
  return this.name;
}

var companyInstance = new Company();
console.log(companyInstance.getName()); // Scotch

// Order of precedence
1. Constructor calls (rule 4)
2. Explicit binding (rule 3)
3. Implicit binding (rule 2)
4. Default binding (rule 1)


// Обработчик события является коллбэеком, который регистрирует событие
button.addEventListener('click', function() {
  console.log('clicked')
});

var company = {
  name: 'Scotch',
  getName: function() {
    console.log(this.name)
  }
}

// bind getName's context as 'company'
button.addEventListener('click', company.getName.bind(company));

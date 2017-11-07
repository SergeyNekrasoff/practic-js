// =============================
// Scotch.io
// 10 JS Essential Concepts
// =============================



// =============================
// Closures
// =============================
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

// Map
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


// =============================
// This
// =============================

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
// 1. Constructor calls (rule 4)
// 2. Explicit binding (rule 3)
// 3. Implicit binding (rule 2)
// 4. Default binding (rule 1)

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


// =============================
// Basic Design Patterns
// =============================

// Creational Patterns
// IIFE (Immediatly Invoked Function Expression)
(function(){})();

// Module (return it`s export function data)
const options = {
  username: 'admin',
  server: '127.0.0.1'
}

const objectConfig = (function(params) {

  return {
    login: login
  };

  var username = params.username || '',
      server = params.server || '',
      password = params.password || '';

  function checkPassword() {
    if (this.password === '') {
      console.log('no password');
      return false
    }

    return true;
  }

  function checkUsername() {
    if (this.username === '') {
      console.log('no username');
      return false
    }

    return true;
  }

  function login() {
    if (this.checkPassword && this.checkUsername) {
      console.log(;success);
    }
  }
})(options);


// Structural Patterns
// Facade Example jQuery
$(document).ready(function() {
  // code
});

// Composites Patterns
// Examples jQuery
$('#dataTable tbody tr').on('click', function(event) {
  alert($(this).text());
});

// Behavioral Patterns
// Observer
var a         = $({});
$.subscribe   = a.on.bind(a);
$.unsubscribe = a.off.bind(a);
$.publish     = a.trigger.bind(a);

// Usage
document.on('recordsReceived', function(records) {
  // perform some actions, then fire an event

  $.publish('recordsShow', records);
});

// We can subscribe to this event and then fire our own event.
$.subscribe('recordsShow', function() {
  // display the records somehow
  ..

  // publish an action after they are shown.
  $.publish('recordsDisplayed);
});

$.subscribe('recordsDisplayed, function() {
    ...
});


// =============================
// Callbacks, Promises, and Sync
// =============================

// Asynchronous Operations

// ========
// Callback functions
setInterval(function() {
  console.log('hello');
}, 3000);

// Anonymous Callback
function greeting(name) {
  console.log(`Hello ${name}`);
}

// Naming Callback
function introduction(firstName, lastName, callback) {
  var fullName = `${firstName} ${lastName}`;

  callback(fullName);
}

introduction('Bob', 'Dylan', greeting); // Hello Bob Dylan

// ========
// Promises

// old
date
  .then(function(done) {
    // the content from the resolve() is here
  })
  .catch(function(error) {
    // the info from the reject() is here
  });

const myDate = function() {
  date
    .then(function(done) {
      console.log('We are going on a date');
      console.log(done);
    })
    .catch(function(error) {
      console.log(error.message);
    });
}
myDate();

// new by using Promises
const orderUber = function(dateDetails) {
  const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date`;
  return Promise.resolve(message);
}

const myDate = function() {
  date
    .then(orderUber)
    .then(function(done) {
      console.log(done);
    })
    .catch(function(error) {
      console.log(error.message);
    })
}

myDate();

// Async
function foo() {
  return Promise.reject(25);
}
// is equal
async function() {
  throw 25;
}

// Await
async function myDate() {
  try {
    let dateDetails = await date;
    let message = await orderUber(dateDetails);
    console.log(message);
  } catch {
    console.log(error.message);
  }
}

(async() => {
  await myDate();
})();


// =============================
// ES6 Roundup Features
// =============================

// ========
// Arrow String
// ES5
var stringLowerCase = function() {
  var this    = this
  this.string = this.string.toLowerCase();

  return function() {
    console.log(this.string);
  }
};
stringLowerCase.call({
  string: 'Java Script'
})();

// ES6
var stringLowerCase = () => {
  this.string = this.string.toLowerCase();
  return () => console.log(this.string);
}
stringLowerCase.call({
  string: 'Java Script'
})();

// Explicit (for more than one lines code)
let sayHello = () => {
  return 'explicit';
}

// Implicit
lat sayHello = () => {
  console.log('implicit');
}

// ========
// Default Parameters
// ES5
var garage = function(model, year) {
  var model = model || 'BMW';
  var year = year || '2002';
}

// ES6
var garage = function(model = 'BMW', year = '2002') {}

// =======
// Classes
class carGarage {
  constructor(price = {}, mileage = []) {
    this.car = 'Ford',
    this.model = 'Mustang',
    this.color = 'blue',
    this.price = price;
    this.mileage = mileage;
  }

  getCarModel() {
    console.log(`Car model: ${this.model}`);
  }
}

// Extends Class
class carDealerShop extends carGarage {
  constructor(price, mileage) {
    super([15000, 50000]);
    this.name = 'Ford Mustang';
    this.year = 2012;
  }
}

let carSale = new CarDealerShip();

carSale.getCarModel();                          // Car model: Mustanf
console.log(`Data is ${price} and ${mileage}`); // Data is 15000 and 50000

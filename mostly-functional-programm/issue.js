// Композиция
var compose = function(f, g) { // x.toUpperCase() + '!'
  return function(x) { // return attr 'send work'
    return f(g(x)); // execute func g(+ '!') then func f => 'SEND WORK'
    // result= 'SEND WORK!'
  };
};

var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

console.log(`shout: ${shout('send work')}`);


// Императивная парадигма
var makes = [];
for (var i; i < cars.length; i++) {
  makes.push(cars[i].make)
}

// Декларативная парадигма
var makes = cars.map(function (car) { return car.make; });


// Императивная парадигма
var authenicate = function (form) {
  var user = toUser(form);
  return logIn(user);
}

// Декларативная парадигма
var authenicate = compose(logIn, toUser);


var reduce = curry()

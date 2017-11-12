// Design Patterns

// Singletone
// =====================
// In static property
function Universe () {
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }

  this.start_time = 0;
  this.bang = 'big';

  Universe.instance = this;

  return this;
}

var uni = new Universe();
var uni2 = new Universe();

uni === uni2; // true

// In clousure
function Universe() {
  var instance;

  Universe = function Universe() {
    return instance;
  }

  Universe.prototype = this;

  instance = new Universe();
  instance.constructor = Universe;

  instance.start_time = 0;
  instance.bang = 'big';

  return instance;
}

// Factory
function CarMaker() {}

CarMaker.prototype.drive = function () {
  return 'Vroom, I have ' + this.doors + 'doors';
}

// static factory method
CarMaker.factory = function (type) {
  var constr,
      newcar;

  if (typeof CarMaker[constr] !== 'function') {
    throw {
      name: 'Error',
      message: constr + ' doesn`t exist'
    };
  }

  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker();
  }

  newcar = new CarMaker[constr]();

  return newcar;
};

CarMaker.Compact = function () {
  this.doors = 4;
};

CarMaker.Convertible = function () {
  this.doors = 2;
};

CarMaker.SUV = function () {
  this.doors = 24;
};

// Decorator
function Sale(price) {
  this.price = price || 100;
}

Sale.prototype.getPrice = function () {
  return this.price;
}

Sale.decorators = {};

// This is decorator
Sale.decorators.fedtax = {
  getPrice: function() {
    var price = this.uber.getPrice();
    price += price * 5/100;
    return price;
  }
};

sale = sale.decorate('fedTax');

// Facade
var myevent = {
  stop: function (e) {
    e.stopPropagation();
    e.preventDefault();
  }
}

// Mediator
function Player(name) {
  this.points = 0;
  this.name = name;
};

Player.prototype.play = function () {
  this.points += 1;
  mediator.played();
};

// Observer
var publisher = {
  subscibers: {
    any: []
  },

  subscribe: function (fn, type) {
    type = type || 'any';
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }

    this.subscribers[type].push(fn);
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function (action, arg, type) {
    var pubtype = type || 'any',
        subscribers = this.subscribers[pubtype],
        i,
        max = subscribers.length;
    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
}

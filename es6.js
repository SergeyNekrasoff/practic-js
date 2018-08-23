// ES 6



// ------------------------------
// Классы

// создается функция-конструктор Person (также как ES 5)
class Person {
  // свойство конструктор используется для обозначения того,
  constructor(name) {
    // что будет происходить в самом конструкторе
    this.name = name;
  }

  sayName() {
    alert(`Person ${this.name} said his name`);
  }
}

// extends
// расширение класса

class GreatPerson {
  constructor(name, phrase) {
    // вызов конструктора-родителя constructor(name)
    // всё что делает super при вызове внутри конструктора (св-ва constructor)
    // вызывает конструктор родителя и записывает текущий объект
    // (т.е. в this) всё, что от него требуется
    super(name);
    this.phrase = phrase;
  }
  sayPhrase() {
    console.log(`${this.name} says: "${this.phrase}"`)
  }
}

const john = new Person('John');

john.sayName(); // Person Jane said his name
john.sayPhrase(); // Jane says: "Hello, World!"

// super

// Подводный камень: при реализации наследования с помощью
// extends и работе с дочерним конструктором необходимо
// вызвать super() перед добавлением любого нового свойства
class GreatPerson extends Person {
  constructor(name, phrase) {
    // сначала super()
    super(name);
    // потом записи собственных свойств
    this.phrase = phrase;
  }
}

// Classes without Constructors
// Если не указать явно в конструкторе что нужно сделать,
// оно и так запишется

// Static
class Person {
  // служебная функция, записанная через Static
  // благополучно переносятся на конструктор потомка
  static sos() {
    console.log('I really need help!');
  }
}

class Artist extends Person {
  draw(art) {
    console.log(`Artist has just drawn ${art}`);
  }
}

const artist = new Artist();

Person.sos(); // I really need help!
Artist.sos(); // I really need help!
artist.sos(); // artist.sos is not a function


// свойство super()
const logger = {
  log() {
    console.log('Hello, World from logger!');
  }
};

const child = {
  log() {
    super.log();
    console.log('Hello, World from child!');
  }
};

Object.setPrototypeOf(child, logger);
child.log();

// "Hello, World from logger!"
// "Hello, World from child!"


// Функции высшего подрядка
// es5

function bestSellingAlbum(x) {
   return albumList.filter(
     function (album) { return album.sales >= x; }
   );
 }

 // es6
 const bestSellingAlbums = (x) => albumList.filter(album => album.sales >= x);


// Как правильно писать методы в классах ES6
class Name {
    method() {
        getContacts(this._handleResponse, this);
    }

    _handleResponse() {
        this.contacts = res.data.contacts;
    }
}

console.log('Practic JavaScript');
console.log('=======================');

// myname = 'global';

// function func() {
//   console.log(myname);
//   var myname = 'local';
//   console.log(myname);
// }

// func();

// console.log('Enumerated');
// var arr = ['a', 'b', 'c'];
// console.log(Object.getOwnPropertyNames(arr).sort());

// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.getOwnPropertyNames(obj).sort());

// console.log('Non-numeric');
// var arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr));

// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj));

// console.log('specification this');
// function func() {
//   return this.prop;
// }

// window.prop = 'я - дитя window';
// var obj = { prop: 'я - дитя obj' };

// obj.func = func;
// var undefined;

// console.log(func());
// console.log(func.call(null));
// console.log(func.call());
// console.log(func.call(undefined));

// console.log(func.apply(obj));
// console.log(func.call(obj));

// console.log('try & catch');

// try {
//   var number = 9;
//   console.log(number.toString(2));
//   console.log('Success!');
// } catch(e) {
//   console.log('Error!');
// }


// console.log('Define functions');

// a();
// b();

// var b = function() {
//   console.log('function b');
// }

// function a() {
//   console.log('function a');
// }

// console.log('Closure');

// function createCounter() {
//   var numberOfCalls = 0;
//   return function() {
//     return ++numberOfCalls;
//   }
// }

// var fn = createCounter();

// fn();
// fn();
// fn();

// function greeter() {
//   var prefix = 'Hello, ';
//   var postfix = '!';

//   return function(name) {
//     console.log(prefix + name + postfix);
//   }
// }

// var greet = greeter();

// greet('Serj');

// console.log('Methods call and apply');

// function test() {
//   return [].join.call(arguments, '-');
// }

// console.log(test('one', 'two', 'three'));

// function func(a, b, c) {
//   return a * b + c;
// }

// console.log(func.call(func, 1, 2, 3, 4, 5, 6, 7));

// var args = [1, 2, 3,];

// console.log(func.apply(func, args));

// console.log('Array methods');

// var m = [1, 1, 2, 2];

// console.log(m.indexOf(1));
// console.log(m.indexOf(1, 2));
// console.log(m.lastIndexOf(2));
// console.log(m.lastIndexOf(2, 1));

// var b = m.map(function(n) { return n * n; });

// console.log(b);

// var a = [1, 0, 2, 3, 0, 0];

// var isZero = function(n) { return n == 0; }

// console.log(a.some(isZero));
// console.log(a.every(isZero));
// console.log(a.filter(isZero));

// setTimeout(function() { alert('Hello') }, 1500);

// ------------------------------
// console.log('Prototype');

// определяем объект-прототип
// var proto = {
//   sentence  : 4,
//   probation : 2
// };
//
// // определяем конструктор объекта
// var Prisoner = function(name, id) {
//   this.name = name;
//   this.id = id;
// };
//
// // связываем конструктор с прототипом
// Prisoner.prototype = proto;
//
// // создаем объекты
// var firstPrisoner = new Prisoner('Joe', '12A');
// var secondPrisoner = new Prisoner('Sam', '2BC');
//
// console.log('firstPrisoner', firstPrisoner);
// console.log('secondPrisoner', secondPrisoner);
// console.log('Prisoner', Prisoner);
//
// // создание объектов с помощью Object.create
// var proto = {
//   sentence  : 4,
//   probation : 2
// }
//
// var firstPrisoner = Object.create(proto);
// firstPrisoner.name = 'Joe';
// firstPrisoner.id = '12A';
//
// var secondPrisoner = Object.create(proto);
// secondPrisoner.name = 'Sam';
// secondPrisoner.id = '2BC';

// Использование фабричной функции
// var proto = {
//   sentence  : 4,
//   probation : 2
// };
//
// // фабричная функция для создания объектов prisoner
// var makePrisoner = function(name, id) {
//   var prisoner = Object.create(proto);
//   prisoner.name = name;
//   prisoner.id = id;
//   return prisoner;
// };
//
// var firstPrisoner = makePrisoner('Joe', '12A');
// var secondPrisoner = makePrisoner('Sam', '2BC');
//
// console.log('firstPrisoner', firstPrisoner);
// console.log('secondPrisoner', secondPrisoner);
// console.log('proto', proto);
// console.log('secondPrisoner', secondPrisoner.proto);

// var menu, outer_function,
//     food = 'cake';
//
// outer_function = function() {
//   var fruit, inner_function;
//
//   fruit = 'apple';
//
//   inner_function = function() {
//     return {food: food, fruit: fruit};
//   }
//
//   return inner_function;
// };
//
// menu = outer_function();
//
// // создается контекст выолнения inner_function
// menu();

// Constructors
// function Calculator() {
//
//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };
//
//   this.sum = function() {
//     return this.a + this.b;
//   };
//
//   this.mul = function() {
//     return this.a * this.b;
//   }
// }
//
// var calculator = new Calculator();
// calculator.read();
//
// console.log('Сумма = ' + calculator.sum());
// console.log('Произведение = ' + calculator.mul());
// function Accumulator(startingValue) {
//   this.value = startingValue;
//
//   this.read = function() {
//     this.value = +prompt('Прибавить?', 0);
//   };
// }
//
// var accumulator = new Accumulator(1);
// accumulator.read();
//
// alert(accumulator.value);

// function Animal(name) {
//   this.name = name;
//   this.canWalk = true;
// }
//
// var ejik = new Animal('ёжик');
// var slon = new Animal('слон');
// var kit = new Animal('кит');
//
// console.log(ejik);
// console.log(slon);
// console.log(kit);

// var animal = new function() {
//   this.name = 'Васька';
//   this.canWalk = true;
// };
//
// console.log(animal);

// function BigAnimal() {
//   this.name = 'Мышь';
//   return {
//     name: this.name
//   };
// }
//
// console.log(new BigAnimal);

// function User(name) {
//   this.name = name;
//   this.sayHi = function() {
//     console.log('Моё имя: ' + this.name);
//   };
// }
//
// var ivan = new User('Иван');
// var bruce = new User('Брюс');
// var nik = new User('Ник');
//
// ivan.sayHi();
// bruce.sayHi();
// nik.sayHi();

// ------------------------------
// Наследование

// дед-попугай с двумя лапами
// var ParrotGrandfather = function() {};
//
// ParrotGrandfather.prototype = {
//   species: 'Parrot',
//   paws: 2
// };
//
// // отец-попугай унаследовал всё у деда
// var ParrotFather = function() {};
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);
//
// // сын-попугай унаследовал всё у отца
// var ParrotSon = function() {};
// ParrotSon.prototype = Object.create(ParrotFather.prototype);
//
// var grandfather = new ParrotGrandfather();
// var father = new ParrotFather();
// var son = new ParrotSon();
//
// // все попуги блеать
// // console.log(grandfather.species, father.species, son.species);
// // у всех по две лапы
// // console.log(grandfather.paws, father.paws, son.paws);
//
// // дед меняет кол-во лап
// ParrotGrandfather.prototype.paws++;
// // теперь у всех 3 лапы
// // console.log(grandfather.paws, father.paws, son.paws);
//
// // отец и сын теперь орёл
// ParrotFather.prototype.species = 'eagle';
// // console.log(grandfather.species, father.species, son.species);
//
// // сын уменьшил кол-во лап
// ParrotSon.prototype.paws--;
// // console.log(grandfather.paws, father.paws, son.paws);
//
// // дед решил стать чайкой
// ParrotGrandfather.prototype.species = 'seagull';
// console.log(grandfather.species, father.species, son.species);

// ------------------------------
// Полиморфизм

// собственный конструктор
// var Person = function(name) {
//   this.name = name;
// }
//
// Person.prototype.toString = function() {
//   // переназначение метода toString для всех объектов
//   // созданных с помощью данного контрсуктора
//   return 'Person ' + this.name;
// };
//
// var john = new Person('John');
//
// var arr1 = [4, 2];
// var arr2 = [5, 3];
//
// // переназначен метод toString для arr1
// arr1.toString = function() {
//   return 'Array ' + this.reduce(function(result, item) {
//     return result + '' + item;
//   });
// };
//
// // при использовании toString, происходит проверка какой метод использовать
// // изначально проверяется существует ли нужное свойство на самом объекте
// // если существует то используется оно, если нет, то проверка продолжается
// // на наличие свойства проверяется прототип, потом прототип прототипа, потом
// // прототип прототипа прототипа, и так до конца (null), null является прототипом
// // объекта
// // полиморфизм отвечает за то, чей метод вызвать
// // в итогe
// console.log(john.toString());
// console.log(arr1.toString());
// console.log(arr2.toString());

// ------------------------------
// Классы

// ES5
// var Person = function(name) {
//   this.name = name;
// }
//
// Person.prototype.sayName = function() {
//   console.log('Person ' + this.name + ' said his name');
// }
//
// var john = new Person('John');
// john.sayName();
//
// // ES 6
// // создается функция-конструктор Person (также как ES 5)
// class Person {
//   // свойство конструктор используется для обозначения того,
//   constructor(name) {
//     // что будет происходить в самом конструкторе
//     this.name = name;
//   }

//   sayName() {
//     alert(`Person ${this.name} said his name`);
//   }
// }

// const john = new Person('John');
// john.sayName();

const up = (str) => str.toUpperCase();
let str = `this is ${up('string')} in uppercase`;

console.log(str);

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

const john = new Person('John');
john.sayName();

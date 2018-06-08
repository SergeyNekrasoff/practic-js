// ------------------------------
// Наследование

// дед-попугай с двумя лапами
var ParrotGrandfather = function() {};

ParrotGrandfather.prototype = {
  species: 'Parrot',
  paws: 2
};

// отец-попугай унаследовал всё у деда
var ParrotFather = function() {};
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

// сын-попугай унаследовал всё у отца
var ParrotSon = function() {};
ParrotSon.prototype = Object.create(ParrotFather.prototype);

var grandfather = new ParrotGrandfather();
var father = new ParrotFather();
var son = new ParrotSon();

// все попуги блеать
console.log(grandfather.species, father.species, son.species);
// у всех по две лапы
console.log(grandfather.paws, father.paws, son.paws);

// дед меняет кол-во лап
ParrotGrandfather.prototype.paws++;
// теперь у всех 3 лапы
console.log(grandfather.paws, father.paws, son.paws);

// отец и сын теперь орёл
ParrotFather.prototype.species = 'eagle';
console.log(grandfather.species, father.species, son.species);

// сын уменьшил кол-во лап
ParrotSon.prototype.paws--;
console.log(grandfather.paws, father.paws, son.paws);

// дед решил стать чайкой
ParrotGrandfather.prototype.species = 'seagull';
console.log(grandfather.species, father.species, son.species);

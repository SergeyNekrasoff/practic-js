// Classes

// ==================
class Food {
  constructor (name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }

  toString () {
    return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`
  }

  print () {
    console.log(this.toString());
  }
}

const chicken_breast = new Food('Chicker Breast', 26, 0, 3.5);

chicken_breast.print(); // 'Chicken Breast | 26g P :: 0g C :: 3.5g F'
console.log(chicken_breast.protein); // 26

// Subclasses
class FatFreeFood extends Food {
  contructor (name, protein, carbs) {
    super(name, protein, carbs, 0);
  }

  print () {
    super.print();
    console.log(`Would you like -- ${this.name} has no fat!`);
  }
}

const fat_free_food = new FatFreeFood('Yogurt', 16, 12);
fat_free_food.print();


// Prototypes: A Deep Dive
// ==================

// Creating Objects with Constructor Calls
functino Food(name, protein, crabs) {
  var obj = {};

  Object.setPrototypeOf(obj, Food.prototype);

  obj.name = name;
  obj.protein = protein;
  obj.crabs = crabs;

  return obj;
}

var fatFood = Food('Pizza', 300, 0);
console.log(Food.protein); // 300

// Emulating 'class' Behavior
function Food (name, protein, carbs, fat) {
  this.name = name;
  this.protein = protein;
  this.carbs = carbs;
  this.fat = fat;
}

Food.prototype.toString = function() {
  return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
}

function FatFreefood (name, protein, carbs) {
  Food.call(this, name, protein, carbs, 0);
}

// LINE A: Using Object.create to manually set FatFreeFood`s parent
FatFreeFood.prototype = Object.createClass(Food.prototype);

// LINE B: Manually (re)setting constructor reference (!)
Object.defineProperty(FatFreeFood.constructor, 'constructor', {
  enumerable: false,
  writeable: true,
  value: FatFreeFood
});

// Static Methods
class Food {
  static describe() {
    console.log('"Food" is a data type for storing macronutrient information.');
  }
}

Food.describe();

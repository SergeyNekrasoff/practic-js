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

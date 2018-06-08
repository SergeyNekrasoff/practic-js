// Carry
// Когда мы говорили о чистых функциях, мы договорились о том, что для одного аргумента они возвращают одно значение. Это как раз то,
// чем занимается каррирование — каждый аргумент возвращает новую функцию, принимающую оставшиеся аргументы

var add = function (x) {
  return function (y) {
    return x + y;
  }
}

// es6
let add = a => b => a + b

var increment = add(2);

var addTen = add(10);

console.log(`incr: ${increment(0)}`);

console.log(`addTen: ${addTen(4)}`);

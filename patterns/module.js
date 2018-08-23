var someFunc = (function() {
  var a = 3;

  // private method
  var increment = function() {
    console.log('Inside private method!');
    a++;
  }

  var showA = function() {
    console.log(`a: ${a}`);
  }

  // public method
  return {
    plus: increment,
    show: showA
  }
})();

someFunc.plus(); // Inside private method
someFunc.show(); // 4

const arr = [];

function range(start, end, step) {
  var props = {
    start: start,
    end: end,
    step: step,
    arr: []
  }

  if (arr.length === 0) {
    // for (var i = 0; i < arguments.length; i++) {
    //   var arg = arguments[i];
    //
    //   console.log(`arg: ${arg}`);
    // }

    for (var i = 1; i <= 10; i++) { 
      props.arr.push(i);
    }

    arr = props.arr;

    return arr.slice(start - 1, end).concat(arr.slice(end + 1));
  }
}

// function sum(arr) {
//   var total = 0;
//
//   for (var i = 0; i < arr.length; i++) {
//     var num = arr[i];
//     total += num
//   }
//
//   return total
// }

// console.log(`range: ${sum(range(1, 10))}`);
range(1, 10, 2);
// console.log(`range: ${range(1, 10, 2)}`);

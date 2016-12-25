console.log('arrays tasks');
console.log('------');

// ============================
// console.log('Reverse String');
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
//
// function reverseString(str) {
//     var result = '';
//
//     for (var i = str.length - 1; i >= 0; i--) {
//         result += str[i];
//     }
//     return result
// }
//
// function reverseString(str) {
//     return (str === '') ? '' : reverse(str.substr(1) + str.charAt(0))
// }
//
// console.log(reverseString('Keegh'));

// var user = {
//     firstName: 'Вася',
//     surName: 'Обломов',

//     get fullName() {
//         return this.firstName + ' ' + this.surName;
//     },

//     set fullName(value) {
//         var split = value.split(' ');
//         this.firstName = split[0];
//         this.surName = split[1];
//     }
// };
// alert(user.fullName);

// ============================
// console.log("Array has '0' and add to first and last '1'");

// var arr = [];

// for (var i = 0; i < 10; i++) {
//     arr.push(0);
// }

// arr.push(1);
// arr.unshift(1);

// console.log(arr);

// ============================
// console.log("Fil the array 0 and 1 alternately");

// function randArr() {
//     var $arr = [];

//     for (var i = 0; i < 11; i++) {
//         var $randNum = Math.random(),
//             $dig = ($randNum * 10) / 10,
//             $rounded = Math.round($dig);

//         $arr[i] = $rounded;
//     }
//     return $arr;
// }

// console.log(randArr());


// var $arr =  Array(5);

// for (var i = 0; i < $arr.length; $arr[i++] = 1);

// function makeArrayOf(value, length) {
//     var arr = [],
//         i = length;

//     while (i--) {
//         arr[i] = value;
//     }
//     return arr;
// }

// console.log(makeArrayOf(0, 5));
// console.log(makeArrayOf('ss', 10));

// ============================
// ES6
// console.log(Array(1000).fill(0));

// ============================
// console.log("Find numbers which divided on '3', but not divided on '7'");

// var arr = [],
//     arr2 = [];

// for (var i = 0; i <= 54; i++) {
//     var item = arr.push(i);

//     if (arr[i] % 3 == 0 && (!arr[i] % 7 == 0)) {
//         arr2.push(arr[i]);
//     }
// }

// console.log(arr2);

// ============================
// console.log("Find sum and op elements of array");

// var arr = [],
//     summary = 0;

// for (var i = 0; i <= 5; i++) {
//     // arr.push(i);
//     var result = 0;

//     result += i;
// }
// console.log(result);

// ============================
// console.log("Fill array odd numbers");

// var arr = [];

// for (var i = 0; i < 33; i++) {
//     if (i % 2 !== 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// ============================
// console.log("Make decreasing array with numbers, which divided on 3");

// var arr = [];

// for (var i = 25; i > 0; i--) {
//     if (i % 3 === 0) {
//         arr.push(i);
//     }
// }
// console.log(arr);

// ============================
// console.log("Make array, in which has each element is square myself index");

// var arr = [],
//     sum = 0,
//     op = 0;

// for (var i = 0; i <= 5; i++) {
//     arr.push(i * i);
// }

// console.log(arr);

// ============================
// console.log('All elements of array do summary and multiply');
// var arr = [];

// for (var i = 1; i <= 5; i++) {
//     arr.push(i);
// }

// var sum = arr.reduce(function(a, b) {
//     return a + b;
// });

// var multiply = arr.reduce(function(a, b) {
//     return a * b;
// });

// // ES6
// // var multiply = arr.reduce((a, b) => a * b);

// console.log(sum);
// console.log(multiply);

// ============================
// console.log('Create specular array');

// Array.prototype.SumArray = function(arr) {
//     var sum = [];

//     if (arr != null && this.length == arr.length) {
//         for (var i = 0; i < arr.length; i++) {
//             sum.push(this[i] + arr[i]);
//         }
//     }

//     return sum;
// }

// var array1 = [1, 2, 3, 4, 5];
// var array2 = [5, 4, 3, 2, 1];

// var sum = array1.SumArray(array2);

// console.log(sum);

// ============================
// console.log('Generate any array');
// var arr = Array(24),
//     arr2 = [];

// for (var i = 0; i <= arr.length; i++) {
//     arr2.push(i);
// }

// console.log(arr2);


// --==--==--===---===--==--==--
// Basket Store
// var basketModule = (function() {
//     var basket = [];

//     return {
//         addItem: function(values) {
//             basket.push(values);
//         },
//         getItemCount: function() {
//             return basket.length;
//         },
//         getTotal: function() {
//             var q = this.getItemCount(),
//                 p = 0;

//             while (q--) {
//                 p += basket[q].price;
//             }
//             return p;
//         }
//     }
// }());

// basketModule.addItem({item: 'bread', price: 20});
// basketModule.addItem({item: 'pretty', price: 50});

// console.log(basketModule.getItemCount());
// console.log(basketModule.getTotal());

// var module = (function() {
//     var _private = {
//         i: 5,

//         get: function() {
//             console.log('Текущее значение: ' + this.i);
//         },
//         set: function(val) {
//             this.i = val;
//         },
//         run: function() {
//             console.log('процесс запущен');
//         },
//         jump: function() {
//             console.log('резкое изменение');
//         }
//     };
//     return {
//         facade: function(args) {
//             _private.set(args.val);
//             _private.get();
//             if (args.run) {
//                 _private.run();
//             }
//         }
//     }
// }());

// module.facade({run: false, val: 12});

// ============================
// console.log('Determine has this number by array');

// var arr = ['a', 'b', 'c', 45, 'dj', 999,'$'];

// function findNumber(arr, x) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === x) {
//             var x = arr[i];
//             console.log(x);
//             return true;
//         }
//     }
// }

// findNumber(arr, 3);

// ============================
// console.log('Find quantity even numbers');

// var arr = [];

// for (var i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         arr.push(i);
//     }
// }

// console.log(arr.length);

// ============================
// console.log('Find quantity numbers, which divided on 3, but not divided on 7');

// var arr = [];

// for (var i = 0; i <= 10; i++) {
//     if (i % 3 === 0 && i % 7 !== 0) {
//         arr.push(i);
//     }
// }

// console.log(arr.length);

// ============================
// console.log('Find summary and multiply even numbers by array');

// var sum = 0,
//     multiply = 1,
//     arr = [];

// for (var i = 0; i < 5; i++) {
//     arr.push(i);
// }

// for (var j = 1; j < arr.length; j++) {
//     multiply *= arr[j];
// }

// for (var k = 0; k < arr.length; k++) {
//     sum += arr[k];
// }

// console.log('array: ' + arr);
// console.log('sum: ' + sum);
// console.log('multiply: ' + multiply);

// ============================
// console.log('Find biggest and smallest element of array and return they sum');

// var arr = [3, 6, 7, 23, 76, 9];

// // for (var i = 0; i <= 10; i++) {
// //     arr.push(i);
// // }

// Very slow speed
// function arrayMin(arr) {
//     return arr.reduce(function(a, b) {
//         return (a < b ? a : b);
//     });
// };

// Very slow speed
// function arrayMax(arr) {
//     return arr.reduce(function(a, b) {
//         return (a > b ? a : b);
//     });
// };

// var sum = arrayMax(arr) + arrayMin(arr);

// console.log('Min ' + arrayMin(arr));
// console.log('Max ' + arrayMax(arr));
// console.log('Sum ' + sum);

// ============================
// console.log('In array replace all elements, which over specific number on average');
// var arr = [],
//     total = 0;

// // Fill random elements on array, but not more 20
// for (var i = 0; i < 20; i++) {
//     var item = Math.round(Math.random(i * 100) * 20);
//     arr.push(item);
// }

// // Total sum all elements of array
// for (var k = 0; k < arr.length; k++) {
//     var item = arr[k];
//     total += item;
// }

// // // Average all elements of array
// var avg = total / arr.length;

// // Replace all elements, which over number in condition
// for (var j = 0; j < arr.length; j++) {
//     if (arr[j] > 5) {
//         arr[j] = avg;
//     }
// }

// // Result
// console.log(arr);

// ============================
// console.log('Have array. Replace all elements, which less last element on first element');

// var arr = [2, 45, 23, 1, 3, 6, 67, 83, 22, 55, 4, 8],
//     arrLen = arr.length,
//     lastElem = arr[arrLen - 1];

// // Fast speed functions for find max and min elements array
// function arrayMin(arr) {
//     var len = arr.length,
//         min = Infinity;

//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// };

// function arrayMax(arr) {
//     var len = arr.length,
//         max = -Infinity;

//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// };

// while (arrLen--) {
//     if (arr[arrLen] < lastElem) {
//         arr[arrLen] = arr[0];
//         // console.log(arr);
//     }
// }

// console.log(arr);

// ============================
// console.log('??? Swap the min and max elements in array');

// var arr = [1, 3, 4, 5, 7, 9, 12, 34];

// function arrayMin(arr) {
//     var len = arr.length,
//         min = Infinity;
//     while (len--) {
//         if (arr[len] < min) {
//             min = arr[len];
//         }
//     }
//     return min;
// };

// function arrayMax(arr) {
//     var len = arr.length,
//         max = -Infinity;
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// };

// var minElem = arrayMin(arr);
// var maxElem = arrayMax(arr);

// // Array.prototype.swap = function(a, b) {
// //     // this[a] = this.splice(b, 1, this[a])[0];
// //     // return this;
// //     var x = this[a];
// //     this[a] = this[b];
// //     this[b] = x;
// //     return this;
// // }

// function swap(arr, i, j) {
//     arr = arr.slice();
//     var tmp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = tmp;
//     return arr;
// }

// function indexOfMax(arr) {
//     if (arr.length === 0) {
//         return -1;
//     }

//     var max = arr[0],
//         maxIndex = 0;

//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             maxIndex = 1;
//             max = arr[i];
//         }
//     }

//     return maxIndex;
// }

// console.log(indexOfMax(arr, 1, 7));

// ============================
// console.log('Appending arrays');

// var arr = [1, 2, 3, 4, 5, 6, 7],
//     arr2 = [67, 45, 72, 44, 13];

// var result = arr.concat(arr2);

// console.log(result);

// ============================
// console.log('Replace each even element of array on prev element');

// var arr = [];

// for (var i = 1; i <= 5; i++) {
//     arr.push(i);
// }

// arr.forEach(function(item, i ,arr) {
//     // var idx = i;
//     // if (idx % 2 === 0) {
//     //     arr[item] = arr.reduce(idx, 1, arr[item], 0)[0];
//     // }
//     console.log('item: ' + item);
//     console.log('i: ' + i);
//     console.log('arr: ' + arr);
// });

// ============================
// console.log('Get summary elements array through reduce()');

// var arr = [1, 1, 1, 2, 5];

// function compare(a, b) {
//     return a + b;
// }

// function reduce(array, combine, start) {
//     var current = start;

//     for (var i = 0; i < array.length; i++) {
//         current = combine(current, array[i]);
//     }

//     return current;
// }

// console.log(reduce(arr, compare, 0));


// ============================
// console.log('Remove first and last elements of array');

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24];

// function removeOutElements(arr) {
//     arr.shift();
//     arr.splice(arr.length - 1, 1);
//     return arr;
// }

// console.log(removeOutElements(arr));

// ============================
// console.log('Remove all elements, which repeat more than two times.');

// var arr = [2, 2, 4, 5, 6, 7, 1, 1, 1, 1, 2, 5, 8, 23, 7, 8, 9, 10];

// function findDuplicates(arr) {
//     var result = [];

//     arr.forEach(function(elem, index) {

//         // console.log('elem: ' + elem);
//         // console.log('index: ' + index);

//         if (arr.indexOf(elem, index + 1) > - 1) {
//             if (result.indexOf(elem) === -1) {
//                 result.push(elem);
//             }
//         }
//     });
//     return result;
// }

// console.log(findDuplicates(arr));

// ============================
// console.log('Have two arrays. Make three array, which comprises with elements');
// console.log('A: have in two arrays');
// console.log('B: have in one of');

// var arr = [1, 2, 3, 4, 5],
//     arr2 = [6, 7, 8, 9, 10],
//     arr3 = arr.concat(arr2),
//     arr4 = arr;

// console.log(arr3);
// console.log(arr4);

// ============================
// console.log('Have a array. Make new array, in which at the beginning to be negative numbers, next zero and next positive');

// var arr = [1, -3, 4, 0, 3, 98, -10, -4, 2];

// function compareNumeric(a, b) {
//     return a - b;
// }

// console.log(arr.sort(compareNumeric));

// ============================
// console.log('In existing array each element is 0, 1 or 2.');
// console.log('Move all elements so, that at the beginning to be 0, 1 and 2.');

// var arr = [2, 0, 1];

// console.log(arr.sort(function(a, b) { return a - b; }));

// ============================
// console.log('Task: 78');

// var arr1 = [1, 2, 3, 4, 5, 6],
//     arr2 = [73, 23, 1, 4, 4, 4, 9, 10];

// function makeSortSumArrays(arrA, arrB) {

//     var sum = arrA.concat(arrB),
//         result = [];

//     sum.sort(function(a, b) {
//         return a - b;
//     });

//     sum.forEach(function(elem, index) {
//         if (sum.indexOf(elem, index + 1) !== - 1) {
//             if (result.indexOf(elem) === -1) {
//                 sum.splice(elem, 1);
//             }
//         }
//     });

//     return sum;
// }

// console.log(makeSortSumArrays(arr1, arr2));

// ============================
// console.log('Task: 82');
// var arr = [];

// for (var i = 0; i <= 10; i++) {
//     var i = Math.round(Math.random(i * 100) * 10);
//     arr.push(i);
// }

// console.log(arr);


// ============================
// console.log('Task: 88');
// console.log('Methods sort Arrays');

// var arr = [2, 1];

// Метод сортировки: пузырьковая
// function bubbleSort(arr) {
//     var n = arr.length;

//     for (var i = 0; i < n - 1; i++) {
//         for (var j = 0; j < n - 1; j++) {
//             if (arr[j + 1] < arr[j]) {
//                 var t = arr[j + 1];
//                 arr[j + 1] = arr[j];
//                 arr[j] = t;
//             }
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort(arr));

// // Метод сортировки: выбором
// function selectionSort(arr) {
//     var n = arr.length;

//     for (var i = 0; i < n - 1; i++) {
//         var min = i;


//         for (var j = i + 1; j < n; j++) {
//             if (arr[j] < arr[min]) min = j;

//             console.log('min: ' + min);
//             console.log('j: ' + j);
//         }

//         var t = arr[min];
//         arr[min] = arr[i];
//         arr[i] = t;
//     }

//     return arr;
// }

// console.log(selectionSort(arr));

// Метод сортировки: вставками
// function insertionSort(arr) {
//     var n = arr.length;

//     for (var i = 0; i < n - 1; i++) {
//         var v = arr[i],
//             j = i - 1;
//         while (j >= 0 && arr[j] > v) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = v;
//     }

//     return arr;
// }

// console.log(insertionSort(arr));


// Метод сортировки: Шелла
// function shellSort(arr) {
//     var n = arr.length,
//         i = Math.floor(n / 2);

//     while (i > 0) {
//         for (var j = 0; j < n; j++) {
//             var k = j,
//                 t = arr[j];

//             while (k >= i && arr[k - i] > t) {
//                 arr[k] = arr[k];
//                 k -= i;
//             }
//             arr[k] = t;
//         }
//         i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
//     }

//     return arr;
// }

// console.log(shellSort(arr));

// Метод сортировки: подсчётом
// function simpleCountingSort(arr) {
//     var n = arr.length,
//         Count = [],
//         B = [];

//     for (var i = 0; i < n; i++) {
//         Count[i] = 0;
//     }

//     for (var i = 0; i < n - 1; i++) {
//         for (var j = i + 1; j < n; j++) {
//             if (arr[i] < arr[j]) {
//                 Count[j]++;
//             } else {
//                 Count[i]++;
//             }
//         }
//     }

//     for (var i = 0; i < n; i++) {
//         B[Count[i]] = arr[i];
//     }

//     return B;
// }

// simpleCountingSort(arr);

// Метод сортировки: расчёской
// function newGap(gap) {
//     gap /= 1.3;
//     if (gap == 9 || gap == 10) {
//         gap == 11;
//     }
//     if (gap < 1) return 1;
//     return gap;
// }

// function combSort(arr) {
//     var n = arr.length,
//         gap = n;

//     do {
//         swapped = false;
//         gap = newGap(gap);
//         for (var i = 0; i < n - gap; i++) {
//             if (arr[i] > arr[i + gap]) {
//                 swapped = true;
//                 var t = arr[i + gap];
//                     arr[i + gap] = arr[i];
//                     arr[i] = t;
//             }
//         }
//     } while (gap > 1 || swapped);

//     return arr;
// };

// console.log(combSort(arr));

// var arr = [2, 1];

// Метод сортировки: быстрая
// function quickSort(arr) {
//     if (arr.length == 0) return [];

//     var a = [],
//         b = [],
//         p = arr[0];

//     for (var i = 1; i < arr.length; i++) {
//         var cur = arr[i];

//         console.log('1. bust arr elems: ' + cur);

//         if (cur < p) {
//             a[a.length] = cur;

//             console.log('2(a). if cur < p: ' + cur);

//         } else {
//             b[b.length] = cur;

//             console.log('2(b). else: ' + cur);
//         }
//     }

//     console.log('3. concat arrs: ' + quickSort(a).concat( p, quickSort(b) ));

//     return quickSort(a).concat( p, quickSort(b) );

// };

// quickSort(arr);
// console.log(quickSort(arr));

var reduce = function(arr, callback, startValue) {
  var i, length = arr.length, result = startValue;
  for (i = 0; i < length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
}

var arrs = [[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]];
var strs = ['JavaScript', 'is', 'awesome'];

var strResults = reduce(strs, function(phrase, word, index) {
  return (index === 0) ? phrase + word : phrase + ' ' + word;
}, '');

var arrResults = reduce(arrs, function(result, current) {
  return result.concat(current);
}, []);

console.log(strResults);
console.log(arrResults);

console.log('lists tasks');
console.log('------');

// ============================
console.log('1 task');

var str = 'English Strings for Skyrim at Skyrim Nexus',
    strChars = str.substring(0),
    strChars2 = str.substr(0),
    strChars3 = str.slice(0),
    strChars3Len = strChars3.length;

function copyString(str, qty) {
  var dump = '';
  for (var i = 0; i < qty; i++) {
    dump += str + ', ';
  }
  return dump;
}

console.log(copyString(str, 3));
console.log(copyString(str, 3).length);

// ============================
console.log('2 task');

var str = 'sunshine',
    str1 = 'The usefulness of this exercise';

console.log('First character: ' + str.slice(0, 1));
console.log('Last character: ' + str.slice(-1));

function medCharacterStr(str) {
  var qtyStr = str.length / 2,
      medChar = str.charAt(qtyStr);

  return medChar;
}

console.log(medCharacterStr(str1));

// ============================
console.log('3 task');

var str = 'sunshine';
var str2 = 'abcd';

function showThreeOutChar(str) {
  var total = [],
      first = [],
      last = [],
      strArr = str.split('');

  if (str.length > 5) {
    first = strArr.slice(0, 3);
    last = strArr.slice(-3);
    total = first.concat(last).join();
  } else {
    for (var i = 0; i < str.length; i++) {
      var firstChar = str.slice(0, 1);
      total.push(firstChar);
    }
  }
  return total;
}

console.log(showThreeOutChar(str));
console.log(showThreeOutChar(str2));


// ============================
console.log('4 task');

function makeid() {
  var text = '',
      possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      arr = [];

  for (var i = 0; i < 10; i++) {
    var item = possible.charAt(Math.floor( Math.random() * possible.length ));
    arr.push(item);
  }

  console.log(arr);

  for (var k = 1; k < arr.length; k += 2) {
    var randEvenNum = Math.floor( (Math.random() * (100 + 1) / 2) * 2 );

    arr.splice(k, 1, randEvenNum);
  }

  return arr;
}

console.log(makeid());

// ============================
console.log('5 task');

var str = 'Generating random whole';

function showEqLetter(str) {
  var matches = [],
      lastLetter = str.slice(-1);

  for (var i = 0; i < str.length; i++) {
    if (str[i] === lastLetter) {
      matches.push(i);
    }
  }

  return matches;
}

console.log(showEqLetter(str));

// ============================
console.log('6 task');

var str = 'welcome';

function showOddElems(str) {
  var result = [];

  for (var i = 1; i <= str.length; ++i) {
    if (i % 2 === 0) {
      result.push(str[i]);
    }
  }

  return result;
}

console.log(showOddElems(str));


// ============================
// Deploy array
var arrays = [[1, 2, 3],[4, 5],[6, 7]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

Deploy array - universal method
var arr = [[1, 2, [3, 4, [5, 5]]], [4, 5], [6]];

function convertToSimpleArray(arrs) {
  var res = [];

  for (var i = 0; i < arrs.length; i++) {

    if (!Array.isArray(arrs[i])) {
      res.push(arrs[i]);
    } else {
      res = res.concat(convertToSimpleArray(arrs[i]));
    }
  }

  return res;
}

console.log(convertToSimpleArray(arr));

// ============================
console.log('10 task');

var arr1 = 'abcttttt';
var arr2 = 'fff';

function abcArr(arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (item)
  }
}

abcArr(arr1);
abcArr(arr2);

// ============================
console.log('11 task');

var str = 'Gelendwagen',
    str2 = 'cerv',
    str3 = 'breadcrumbs',
    str4 = 'csv';

function a(str) {
  var res = [],
      arr = str.split('');

  if (arr.length > 10) {
    arr.splice(6);
  } else {
    arr.length = 12;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = 'o';
      }
    }
  }

  str = arr.join('');

  return str;
}

console.log('str: ' + a(str));
console.log('str2: ' + a(str2));
console.log('str3: ' + a(str3));
console.log('str4: ' + a(str4));

// ============================
console.log('13 task');

var str = 'abcdefg',
    str2 = 'fadadbsf',
    str3 = 'bsssssssadf';

function replaceEachEvenVal(str) {
  var arr = str.split('');

  arr.forEach(function(item, i, arr) {
    if (i % 2 !== 0) {
      if (item !== 'b' && item !== 'a') {
        arr.splice(i, 1, 'c');
      } else {
        arr.splice(i, 1, 'a');
      }
    }
  });

  str = arr.join('');

  return str;
}

console.log(replaceEachEvenVal(str));
console.log(replaceEachEvenVal(str2));
console.log(replaceEachEvenVal(str3));

// ============================
console.log('14 task');

var str = '34fef433ffrdg54wg54';

function findNumber(str) {
  var arr = str.split(''),
      result = [];

  arr.forEach(function(item, i, arr) {
    if (!isNaN(item)) {
      result.push(item);
    }
  });

  str = result.join('');

  return str.length;
}

console.log(findNumber(str));

// ?? ============================
console.log('17 task');

var str = 'sssssxsssxsssxssssxabc';

function removeXBeforeAbc(str) {
  var arr = str.split('');

  arr.forEach(function(item, i, arr) {
    // console.log('item: ' + item);
    // console.log('i: ' + i);
    // console.log('arr: ' + arr);
    if (item === 'x') {
      console.log(item);
    }
  });

  str = arr.join('');

  return str;
}

console.log(removeXBeforeAbc(str));


// ============================
console.log('20 task');

var str = ' Lorem ipsum dolor  . ';

function removeSpace(str) {
  var arr = str.split('');

  arr.filter(function(item, i, arr) {
    if (item === ' ') {
      arr.splice(i, 1, '');
    }
  });

  str = arr.join('');

  return str;
}

console.log(removeSpace(str));
removeSpace(str);

// ============================
console.log('23 task');

var str = '34fef433ffrdg54wg54';

function findSumNumber(str) {
  var arr = str.split(''),
      result = 0;

  arr.forEach(function(item, i, arr) {
    if (!isNaN(item)) {
      var number = + item;

      result += number;
    }
  });

  str = result;

  return str;
}

console.log(findSumNumber(str));


// ============================
console.log('31 task');

var str = 'Brandy';

function removeKindex(str, k) {
  var arr = str.split('');

  arr.splice(k, 1);

  str = arr.join('');

  return str;
}

console.log(removeKindex(str, 1));

// ============================
console.log('38 task');

var str = 'Lorem ipsum dolor sit amet.';

function getQtyWords(str) {
  var words = str.split(' '),
      wordsLen = words.length;

  return wordsLen;
}

console.log(getQtyWords(str));

// ============================
console.log('39 task');

var str = 'ddddddadddddaddadda';

function addBafterA(str) {
  var arr = str.split('');

  arr.forEach(function(item, i, arr) {
    if (item === 'a') {
      arr.splice(i, 0, );
    }
  });

  str = arr.join('');

  return str;
}

console.log(addBafterA(str));


// ============================
console.log('44 task');

var str = 'Judixel@ya.ru',
    str2 = 'dfs@dfs',
    str3 = '2dd2d@.',
    str4 = 'wefwe3.com';

function validateEmail(email) {
  var atSymbol = email.indexOf('@'),
      dot = email.indexOf('.');

  if (atSymbol < 1) return false;

  if (dot <= atSymbol + 2) return false;

  if (dot === email.length - 1) return false;

  return 'Succsess!';
}

console.log(validateEmail(str));
console.log(validateEmail(str2));
console.log(validateEmail(str3));
console.log(validateEmail(str4));

// ============================
console.log('45 task');

function generateEmail(name, host) {
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
      result,
      service = [];

  for (var i = 0; i < 3; i++) {
    var item = possible.charAt(Math.floor( Math.random() * possible.length ));
    service.push(item);
  }

  var service = service.join('');

  result = name + '@' + service + '.' + host;

  return result;
}

console.log(generateEmail('Sergey', 'com'));

// ============================
console.log('63 task');

var str = 'c:/\WebServers/\home/\testsite/\www/\myfile.txt';

function getNameFile(str) {
  var arr = str.split('/').pop().split('');

  arr.forEach(function(item, i, arr) {
    if (item === '.') {
      arr.splice(i).join();
    }
  });

  str = arr.join('');

  return str;
}

console.log(getNameFile(str));


// ============================
console.log('73 task');

var str = '';

function getNameFile(str) {
  var arr = str.split('/').pop().split('');

  str = arr.join('');

  return str;
}

console.log(getNameFile(str));


// ============================
console.log('Check browser');

if (navigator.userAgent.indexOf('Safari') > -1) {
  alert('It`s Safari!!');
} else {
  alert('Not Safari!');
}

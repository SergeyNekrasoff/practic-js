/*
  Title: Access to the Global Object
  Descr: access the global object without hard-codin the identifier window
*/

// var global = (function() {
//   return this || (1, eval)('this');
// }());

// console.log(global);

// var str = 'Lorem ipsum dolor sit amet.';
// var str2 = 'Lorem.';

// var func = function func(str) {
//   return str.split('');
// }

// console.log(func(str2));

// var jstr = '{"mykey": "my value"}';

// var data = JSON.parse(jstr);

// console.log(data.mykey);

// var greet1 = 'Hello there';

// greet1.split(' ')[0];

// greet1.smile = true;

// console.log(typeof greet1.smile);

// var greet = new String('Hello World');

// greet.split(' ')[0];

// greet.smile = true;

// console.log(typeof greet.smile);

// var frag = document.createDocumentFragment();

// $.each(reallyLongArray, function(count, item) {
//   var newLi = $('<li>' + item + '</li>');
//   frag.appendChild(newLi[0]);
// });

// $("#ballers")[0].appendChild(frag);

// var $photo;

// $('.list-item').click(function() {
//   $photo = $photo || $('.photo');
//   $photo.hide();
// });

// antipattern
// var arms = $('div.robotarm', '#container');
// $('.reply_form', $(this).closest('.comment')).hide();

// // pattern
// var arms = $('#container').find('div.robotarm');
// $(this).closest('.comment').find('.reply_form').hide();

// antipattern
// $(elem).data(key, value);

// pattern
// $.data(elem, key, value);


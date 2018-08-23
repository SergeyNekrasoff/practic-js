var Tesla = function() {
  this.numWheels = 4;
  this.make = 'Model S';
}

Tesla.prototype = function() {
  var go = function() {
    console.log('Go!');
  }

  var stop = function() {
    console.log('Stop!');
  }

  return {
    breakTesla: stop,
    goTesla: go
  }
}();

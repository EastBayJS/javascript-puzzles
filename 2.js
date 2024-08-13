// loops 10 times from 0 - 1000 in increments of 100
for (var i = 0; i < 1000; i += 100) {
  (function(i) {
    waitFor(i, function then() {
      console.log(i);
    });
  })(i);
}

// this will run a callback function after waiting milliseconds
function waitFor(milliseconds, callback) {
  setTimeout(callback, milliseconds);
}

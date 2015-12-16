"use strict";

var expect = require('chai').expect;

// Fibonacci
// No checks on n > 0, or type of n
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

expect(fibonacci(1)).to.equal(1);
expect(fibonacci(2)).to.equal(1);
expect(fibonacci(3)).to.equal(2);
expect(fibonacci(4)).to.equal(3);
expect(fibonacci(5)).to.equal(5);
expect(fibonacci(6)).to.equal(8);

var memoize = function (f) {
  var cache = {};
  
  return function() {
    var args = JSON.stringify(arguments);
    cache[args] = cache[args] || f.apply(f, arguments)
    return cache[args]
  }
}

// Takes fibonacci(44) takes 5.3 s on a Late 2013 2,3 GHz Intel Core i7 MacBook
// Pro
console.time("Fibonacci(44)");
expect(fibonacci(44)).to.equal(701408733)
console.timeEnd("Fibonacci(44)");

console.time("Memoized fibonacci(44)");
var mf = memoize(fibonacci)
expect(mf(44)).to.equal(701408733)
console.timeEnd("Memoized fibonacci(44)");

console.time("Memoized fibonacci(45)");
expect(mf(45)).to.equal(1134903170)
console.timeEnd("Memoized fibonacci(45)");





// vim: tabstop=8 expandtab shiftwidth=2 softtabstop=2

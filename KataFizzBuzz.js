
var mod3 = function (n) {
  return n % 3 === 0
}

var mod5 = function (n) {
  return n % 5 === 0
}

var fizzBuzz = function (n) {
  var s
  if (mod3(n) && (mod5(n))) {
    s = 'FizzBuzz'
  } else if (mod3(n)) {
    s = 'Fizz'
  } else if (mod5(n)) {
    s = 'Buzz'
  } else {
    s = n.toString()
  }
  return s
}

for (var i = 1; i < 100; i++) {
  console.log(fizzBuzz(i))
}

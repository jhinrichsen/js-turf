
'use strict'

var assert = require('assert')

var counter = function () {
  var counter = 0
  return {
    inc: function () {
      counter = counter + 1
      return counter
    },
    dec: function () {
      counter = counter - 1
      return counter
    },
    get: function () {
      return counter
    },
    reset: function () {
      counter = 0
      return counter
    }
  }
}

assert(counter().get() === 0)
assert(counter().inc() === 1)
assert(counter().dec() === -1)

var builderCounter = function () {
  var counter = 0
  return {
    inc: function () {
      counter = counter + 1
      return this
    },
    dec: function () {
      counter = counter - 1
      return this
    },
    get: function () {
      return counter
    },
    reset: function () {
      counter = 0
      return this
    }
  }
}

assert(builderCounter().get() === 0)
assert(builderCounter().inc().inc().get() === 2)
assert(builderCounter().inc().inc().dec().dec().get() === 0)
assert(builderCounter().inc().reset().get() === 0)

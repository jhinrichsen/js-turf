"use strict"

// A simulation of a game i' playing with my kids.

// There are 4 cows, sheeps, cats, and pigs each
const nAnimals = 12

// 5 portions of hay
const nHay = 5

/**
 * Roll a regular dice
 * @return Number [1..n]
 */
function roll(n) {
  return Math.floor(1 + Math.random() * n)
}

function newGame() {
  const c = {
    // When starting, all animals are awake
    awake: nAnimals,

    // 5 portions of hay
    hay: 5
  }
  return c
}

// The cock will wake up all animals
function stepCock(ctx) {
  var c = Object.assign({}, ctx)
  c.awake = nAnimals
  return c
}

// Hay will reduce the number of hays by one
function stepHay(ctx) {
  var c = Object.assign({}, ctx)
  c.hay = c.hay - 1
  return c
}

// One animal falls asleep
function stepMoon(ctx) {
  var c = Object.assign({}, ctx)
  c.awake = c.awake - 1
  return c
}

// Return step function based on random dice
function stepFn() {
  const fns = [
    stepHay,
    stepCock,
    stepMoon, stepMoon, stepMoon, stepMoon
  ]
  // Dice is 1..6, index is 0..5
  const idx = roll(fns.length) - 1
  return fns[idx]
}

// The game is won if all animals are asleep
function isWon(ctx) {
  return ctx.awake == 0
}

// The game is lost if there is no more hay
function isLost(ctx) {
  return ctx.hay < 0
}

// Play one game, return true if won
function oneGame() {
  var state = newGame()
  while (true) {
    // A game step
    var fn = stepFn()
    // Apply step to context
    state = fn(state)
    if (isWon(state)) return true
    if (isLost(state)) return false
  }
}

const total = 100000
const games = Array.apply(null, Array(total)).map(oneGame)
const wins = games.filter(b => b).length
console.log(`Played ${total} games winning ${wins}`)

// EOF
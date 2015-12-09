var curry = require('./curry');

function calculate (arg1) {
  return function (op) {
    if (op === 'add' || op === '+') {
      return function (arg2) {
        return arg1 + arg2;
      };
    }

    if (op === 'subtract' || op === '-') {
      return function (arg2) {
        return arg1 - arg2;
      };
    }

    if (op === 'multiply' || op === '*') {
      return function (arg2) {
        return arg1 * arg2;
      };
    }

    if (op === 'divide' || op === '/') {
      return function (arg2) {
        return arg1 / arg2;
      };
    }

    if (op === 'modulo' || op === '%') {
      return function (arg2) {
        return arg1 % arg2;
      };
    }

    if (op === 'power of' || op === '^') {
      return function (arg2) {
        return Math.pow(arg1, arg2);
      };
    }
  };
}

function random (start) {
  return {
    to: function (end) {
      return Math.floor(Math.random() * (end - start)) + start;
    },

    toInclude: function (end) {
      return Math.floor(Math.random() * (end - start)) + start;
    }
  };
}

function concat(arg1, arg2){
  return arg1 + arg2;
}

var prependGreeting = null;


var add4and5 = null;

function calculator(){

}

function curry(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
}

var add5 = null;
var sub5 = null;
var multiply5 = null;
var divide5 = null;
var mod5 = null;
var pow3 = null;

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};
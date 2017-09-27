
const Fulfiller = require('./fulfiller');

const EventEmitter = require('events');

class Storage {
  async get(key) {

  }

  async set(key) {

  }
}




function keyFunc(...args) {
  return JSON.stringify(args);
}

function valueFunc(x, y) {
  return new Promise(function(resolve, reject) {
    console.log("Called");
    setTimeout(function() {
      resolve(x * y);
    }, 2000);
  });
}



const bar = Fulfiller();

function foo() {
  const key = keyFunc.apply(this, arguments);
  return bar(key, ()=> valueFunc.apply(this, arguments));
}


function delay(f, t = 2000) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      try {
        resolve(f());
      } catch(err) {
        reject(err);
      }
    }, t);
  });
}

exports.delay = delay;
exports.keyFunc = keyFunc;
exports.valueFunc = valueFunc;
exports.foo = foo;

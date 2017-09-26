
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



const bar = Fulfiller(valueFunc);

function foo() {
  return new Promise((resolve, reject)=> {
    const key = keyFunc.apply(this, arguments);
    const queue = bar.call(this, key, arguments);
    queue.push({resolve, reject});
  });
}


exports.keyFunc = keyFunc;
exports.valueFunc = valueFunc;
exports.foo = foo;


const Fulfiller = require('./fulfiller');

const EventEmitter = require('events');

class Storage {
  async get(key) {

  }

  async set(key) {

  }
}




function valueFunc(x) {
  return new Promise(function(resolve, reject) {
    console.log("Called");
    setTimeout(function() {
      resolve(x * 2);
    }, 2000)
  });
}



const bar = Fulfiller(valueFunc);

function foo(key) {
  return new Promise(function(resolve, reject) {
    const queue = bar(key);
    queue.push({resolve, reject});
  });
}

exports.valueFunc = valueFunc;
exports.foo = foo;

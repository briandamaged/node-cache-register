
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


const awaiting = new Map();


function bar(key) {
  const existingQueue = awaiting.get(key);
  if(existingQueue) {
    return existingQueue;
  }

  const queue = [];
  awaiting.set(key, queue);

  valueFunc(key)
    .then(function(value) {
      for(const p of queue) {
        p.resolve(value);
      }
    })
    .catch(function(err) {
      for(const p of queue) {
        p.reject(err);
      }
    })
    .then(function() {
      awaiting.delete(key);
    });

  return queue;
}

function foo(key) {
  return new Promise(function(resolve, reject) {
    const queue = bar(key);
    queue.push({resolve, reject});
  });
}

exports.valueFunc = valueFunc;
exports.foo = foo;

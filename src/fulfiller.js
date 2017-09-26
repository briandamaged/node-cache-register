
function Fulfiller(valueFunc) {
  const awaiting = new Map();

  function fulfiller(key, args) {
    const existingQueue = awaiting.get(key);
    if(existingQueue) {
      return existingQueue;
    }

    const queue = [];

    function resolve(value) {
      queue.forEach((p)=> p.resolve(value));
      awaiting.delete(key)
    }

    function reject(err) {
      queue.forEach((p)=> p.reject(err));
      awaiting.delete(key)
    }

    valueFunc.apply(this, args).then(resolve, reject);

    awaiting.set(key, queue);
    return queue;
  }

  return fulfiller;
}


module.exports = exports = Fulfiller;

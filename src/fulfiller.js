
function Fulfiller(valueFunc) {
  const awaiting = new Map();

  function fulfiller(key) {
    const existingQueue = awaiting.get(key);
    if(existingQueue) {
      return existingQueue;
    }

    const queue = [];
    awaiting.set(key, queue);

    function resolve(value) {
      for(const p of queue) {
        p.resolve(value);
      }
      awaiting.delete(key);
    }

    function reject(err) {
      for(const p of queue) {
        p.reject(err);
      }
      awaiting.delete(key);
    }

    valueFunc(key).then(resolve, reject)

    return queue;
  }

  return fulfiller;
}


module.exports = exports = Fulfiller;

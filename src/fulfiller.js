
function Fulfiller() {
  const unfulfilled = new Map();

  function fulfiller(key, createPromise) {
    const existingPromise = unfulfilled.get(key);
    if(existingPromise) {
      return existingPromise;
    }

    function resolve(value) {
      unfulfilled.delete(key);
      return value;
    }

    function reject(err) {
      unfulfilled.delete(key);
      throw err;
    }

    const promise = createPromise().then(resolve, reject);

    unfulfilled.set(key, promise);

    return promise;
  }

  return fulfiller;
}


module.exports = exports = Fulfiller;

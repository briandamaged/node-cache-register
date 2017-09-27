
const Fulfiller = require('./fulfiller');

function keyFunc(...args) {
  return JSON.stringify(args);
}

function parseParams(params) {
  return (
    (typeof(params) === 'function')
    ? { keyFunc, valueFunc: params}
    : params
  );
}

function Debouncer(params) {
  const {keyFunc, valueFunc} = parseParams(params);

  const fulfiller = Fulfiller();

  async function debouncer() {
    const key = keyFunc.apply(this, arguments);
    return fulfiller(key, ()=> valueFunc.apply(this, arguments));
  }

  return debouncer;
}

module.exports = exports = Debouncer;

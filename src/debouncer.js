
// Each Debouncer has its own internal storage. Therefore,
// we don't need to use a Prefixer to avoid key conflicts.
const {jsonifyArgs} = require('./key-funcs');

const Fulfiller = require('./fulfiller');

function parseParams(params) {
  return (
    (typeof(params) === 'function')
    ? { keyFunc: jsonifyArgs, valueFunc: params}
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

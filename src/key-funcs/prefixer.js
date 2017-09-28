
const uuid = require('uuid');

// Wraps another keyFunc and applies a prefix
function Prefixer({keyFunc, prefix = `${uuid()}:` }) {
  // Ensure that prefix is a string
  const p = '' + prefix;

  function prefixer() {
    const partialKey = keyFunc.apply(this, arguments);
    return p + partialKey;
  }

  return prefixer;
}

module.exports = exports = Prefixer;

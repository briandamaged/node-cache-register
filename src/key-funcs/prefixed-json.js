
const jsonifyArgs = require('./jsonify-args');
const Prefixer = require('./prefixer');

function PrefixedJSON({prefix} = {}) {
  return Prefixer({
    prefix,
    keyFunc: jsonifyArgs,
  });
}

module.exports = exports = PrefixedJSON;


const jsonifyArgs = require('./jsonify-args');
const Prefixer = require('./prefixer');

function PrefixedJSON(options = {}) {
  // This is mostly for backwards compatibility
  // with the 0.x API.
  const opts = (
    typeof(options) === 'string'
    ? {prefix: options}
    : options
  );

  const prefix = opts.prefix;

  return Prefixer({
    prefix,
    keyFunc: jsonifyArgs,
  });
}

module.exports = exports = PrefixedJSON;

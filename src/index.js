
const storage = require('./storage');

Object.assign(exports, storage);

exports.CacheRegister = require('./cache-register');

exports.Fulfiller = require('./fulfiller');
exports.Debouncer = require('./debouncer');

exports.storage = storage;
exports.keyFuncs = require('./key-funcs');

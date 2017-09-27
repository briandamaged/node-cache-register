
exports.CacheRegister = require('./cache-register');

exports.Fulfiller = require('./fulfiller');
exports.Debouncer = require('./debouncer');

const {
  BaseStorage, MemoryStorage,
  StorageProxy, HitProxy,
} = require('./storage');

exports.BaseStorage = BaseStorage;
exports.MemoryStorage = MemoryStorage;

exports.StorageProxy = StorageProxy;
exports.HitProxy = HitProxy;

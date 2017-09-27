
const {
  BaseStorage, MemoryStorage,
  StorageProxy, HitProxy,
} = require('./storage');

exports.Fulfiller = require('./fulfiller');
exports.Debouncer = require('./debouncer');

exports.BaseStorage = BaseStorage;
exports.MemoryStorage = MemoryStorage;

exports.StorageProxy = StorageProxy;
exports.HitProxy = HitProxy;

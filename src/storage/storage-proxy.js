
const BaseStorage = require('./base-storage');

class StorageProxy extends BaseStorage {
  constructor({storage} = {}) {
    super();
    this.storage = storage;
  }

  /*async*/ get(key) {
    return this.storage.get(key);
  }

  /*async*/ set(key, value) {
    return this.storage.set(key, value);
  }

  /*async*/ delete(key) {
    return this.storage.delete(key);
  }
}

module.exports = exports = StorageProxy;

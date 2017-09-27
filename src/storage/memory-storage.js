
const BaseStorage = require('./base-storage');

class MemoryStorage extends BaseStorage {
  constructor() {
    super();
    this.cache = new Map();
  }

  async get(key) {
    return this.cache.get(key);
  }

  async set(key, value) {
    this.cache.set(key, {value});
  }
}

module.exports = exports = MemoryStorage;


const StorageProxy = require('./storage-proxy');

// Emits an event for each hit / miss
//
// TODO: Come up w/ a better name for this
class HitProxy extends StorageProxy {
  async get(key) {
    const data = await this.storage.get(key);
    if(value) {
      this.emit('hit', key, data);
    } else {
      this.emit('miss', key);
    }

    return data;
  }

}

module.exports = exports = HitProxy;

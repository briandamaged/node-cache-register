
const StorageProxy = require('./storage-proxy');

class TimeoutPolicy extends StorageProxy {
  constructor({storage, timeout = 60000}) {
    super({storage});
    this.timeout = timeout;

    this.timers = new Map();
  }

  async set(key, value) {
    const retval = await this.storage.set(key, value);

    const t = this.timers.get(key);
    if(t) {
      clearTimeout(t);
    }

    this.timers.set(key, setTimeout(()=> {
      this.storage.delete(key);
      this.timers.delete(key);
      this.emit('forgot', key, value);
    }, this.timeout));

    return retval;
  }
}

module.exports = exports = TimeoutPolicy;

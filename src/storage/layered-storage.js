
const BaseStorage = require('./base-storage');

class LayeredStorage extends BaseStorage {
  constructor({layers = []} = {}) {
    super();
    this.layers = layers;
  }

  /*async*/ get(key) {
    return this._getFromLayer(0, key);
  }

  async _getFromLayer(index, key) {
    if(index < this.layers.length) {
      const d = this.layers[index].get(key);
      if(d) {
        return d;
      }

      const dd = await this._getFromLayer(index + 1, key);
      if(dd) {
        this.set(key, dd.value);
        return dd;
      }
    }
  }

  async set(key, value) {
    await Promise.all(
      this.layers.map((s)=> s.set(key, value))
    );
  }

  async delete(key) {
    await Promise.all(
      this.layers.map((s)=> s.delete(key))
    );
  }
}

module.exports = exports = LayeredStorage;

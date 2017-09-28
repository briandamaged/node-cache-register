
const {PrefixedJSON} = require('./key-funcs');
const Fulfiller = require('./fulfiller');


function CacheRegister({keyFunc = PrefixedJSON(), valueFunc, storage}) {
  const fulfiller = Fulfiller();

  async function cacheRegister() {
    const key = keyFunc.apply(this, arguments);
    return fulfiller(key, async ()=> {
      const d1 = await storage.get(key);
      if(d1) {
        return d1.value;
      }

      const value = await valueFunc.apply(this, arguments);

      // TODO: Figure out how to handle errors here
      storage.set(key, value);

      return value;
    });
  }

  return cacheRegister;
}

module.exports = exports = CacheRegister;

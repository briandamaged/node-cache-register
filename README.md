# cache-register #

All the good cache-related puns were taken...

## Related Projects ##

* [cache-register-redis](https://www.npmjs.com/package/cache-register-redis)

## Installation ##

```shell
npm install --save cache-register
```

## Usage ##

### Too-Quick Example ###

```javascript
async slowFunction(x, y) {
  /* some async operation that takes 5 seconds */
}


const {
  CacheRegister, MemoryStorage
} = require('cache-register');


const cachedFunction = CacheRegister({
  storage: new MemoryStorage(),
  valueFunc: slowFunction,
});
```

### Quick Example ###

```javascript
//////////////////////////////////////////////////////////////
// First, let's assume that we have a slow function, such as:
//////////////////////////////////////////////////////////////
function slowAdd(x, y) {
  return new Promise(function(resolve) {
    console.log(`Calling slowAdd(${x}, ${y})`);
    setTimeout(function() {
      resolve(x + y);
    }, 1000);
  });
}


//////////////////////////////////////////////////////////////
// Ugh!  So slow!  Let's make it faster by caching the results:
//////////////////////////////////////////////////////////////

const {
  CacheRegister, MemoryStorage
} = require('cache-register');

// This calls slowAdd and caches the result in a MemoryStore
const cachedAdd = CacheRegister({
  storage: new MemoryStorage(),
  valueFunc: slowAdd,
});



//////////////////////////////////////////////////////////////
// That was easy.  Now let's try it out!
//////////////////////////////////////////////////////////////

async function run() {
  console.log("We have not cached the value for these particular");
  console.log("arguments yet; so, slowAdd will be called:");
  const v1 = await cachedAdd(2, 3);
  console.log(v1);


  console.log("We've already cached the value for these arguments.");
  console.log("Just return the cached value immediately!");
  const v2 = await cachedAdd(2, 3);
  console.log(v2);


  console.log("We have cached the value for these particular arguments");
  console.log("yet; so, slowAdd will be called again.");
  const v3 = await cachedAdd(5, 6);
  console.log(v3);
}

run();
```

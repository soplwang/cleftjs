cleft.js, Combine stand-alone error and success continuation into node.js style callback.
====

Usage:

```
npm i cleft
```

Example:

```javascript
const then = require('cleft').then;

redis.get('key', then(err, data => console.log(data)));
redis.get('key2', then(err, data => console.log(data)));
redis.get('key3', then(err, data => console.log(data)));

function err(e) {
  console.error(e);
}
```

LICENSE: MIT

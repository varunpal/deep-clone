# deep-clone
Utility to deep clone javascript objects

## Install
```node
npm install v-deep-clone
```

### Example

```javascript
var clone = require('v-deep-clone');

var object = {
  a: 10,
  b: "hello",
  c: [
    {y: 10}, {y: 20}, {y: 30}
  ]
};

var cloned = clone(object);
```

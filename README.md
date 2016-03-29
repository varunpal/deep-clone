# deep-clone
Utility to deep clone javascript objects

## Install
<code>npm install deep-clone</code>

### Example

<code>
var clone = require('deep-clone');

var object = {
  a: 10,
  b: "hello",
  c: [
    {y: 10}, {y: 20}, {y: 30}
  ]
};

var cloned = clone(object);

</code>

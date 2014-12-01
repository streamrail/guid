# guid

CommonJS guid generation module. 

## usage

```javascript
var Guid = require('guid');
var sessionID = new Guid().NewGuid(); // produces something like 47000834-9b80-6dc9-8384-8fa0f04b0176
```

# test

a simple test to validate the structure of the guid is provided. to run:

```
npm test
```
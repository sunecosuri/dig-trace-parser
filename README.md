[![Build Status](https://travis-ci.org/sunecosuri/dig-trace-parser.svg?branch=master)](https://travis-ci.org/sunecosuri/dig-trace-parser)


# dig-trace-parser
Parser resulting from the Dig command (+ trace option) created by the node.

```ｓｈ
npm i dig-trace-parser
```

### Usage 
```js

const dig = require('dig-trace-parser')

const ip = async () => ({
  const domain = 'www.example.com';
  const result = await dig(domain);
  console.log(result);　 // ['93.184.216.34']
})
```

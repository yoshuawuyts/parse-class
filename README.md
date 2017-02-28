# parse-class [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Parse hyperscript class notation. Extracted from [hyperscript][hs].

## Usage
```js
var parseClass = require('parse-class')

var obj = parseClass('foo.bin.baz#bar')
console.log(obj)
// => {
//   name: foo,
//   class: 'bin baz',
//   id: 'bar'
// }
```

## API
### obj = parseClass(string)
Parse a string into an object.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/parse-class.svg?style=flat-square
[3]: https://npmjs.org/package/parse-class
[4]: https://img.shields.io/travis/yoshuawuyts/parse-class/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/parse-class
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/parse-class/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/parse-class
[8]: http://img.shields.io/npm/dm/parse-class.svg?style=flat-square
[9]: https://npmjs.org/package/parse-class
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[hs]: https://github.com/hyperhype/hyperscript

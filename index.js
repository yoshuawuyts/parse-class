var assert = require('assert')
/* eslint-disable no-useless-escape */
var regex = /([\.#]?[^\s#.]+)/
/* eslint-enable no-useless-escape */

module.exports = parseClass

// Our minimal parser doesn’t understand escaping CSS special
// characters like `#`. Don’t use them. More reading:
// https://mathiasbynens.be/notes/css-escapes
function parseClass (str) {
  assert.equal(typeof str, 'string', 'parse-class: str should be type string')
  assert.ok(str.length, 'parse-class: str should be length > 0')

  var arr = str.split(regex)
  var res = {}
  if (!/^\.|#/.test(arr[1])) {
    res.name = arr[1]
  }

  if (arr.length < 4) return res

  for (var i = 3, len = arr.length; i < len; i += 2) {
    var raw = arr[i]

    // strip the leading char, keep the value
    var value = raw.substring(1, raw.length)
    if (raw[0] === '.') {
      res.class = (res.class)
        ? (res.class + ' ' + value)
        : value
    } else if (raw[0] === '#') {
      res.id = (res.id)
        ? (res.id + ' ' + value)
        : value
    }
  }

  return res
}

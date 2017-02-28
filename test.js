var tape = require('tape')
var parseClass = require('./')

tape('parse-class', function (t) {
  t.test('assert input types', function (t) {
    t.plan(1)
    t.throws(parseClass.bind(null), /string/, 'asserts')
  })

  t.test('should parse names', function (t) {
    t.plan(1)
    var res = parseClass('hello')
    var expected = {
      name: 'hello'
    }
    t.deepEqual(res, expected)
  })

  t.test('should parse classes', function (t) {
    t.plan(1)
    var res = parseClass('hello.foo.bar')
    var expected = {
      name: 'hello',
      class: 'foo bar'
    }
    t.deepEqual(res, expected)
  })

  t.test('should parse ids', function (t) {
    t.plan(1)
    var res = parseClass('hello#foo')
    var expected = {
      name: 'hello',
      id: 'foo'
    }
    t.deepEqual(res, expected)
  })

  t.test('all together now', function (t) {
    t.plan(1)
    var res = parseClass('hello#foo.foo.bar')
    var expected = {
      name: 'hello',
      class: 'foo bar',
      id: 'foo'
    }
    t.deepEqual(res, expected)
  })
})

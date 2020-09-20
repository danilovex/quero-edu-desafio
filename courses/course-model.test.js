var test = require('tape')
var course = require('./course-model')

test('course.findAll should return an array', function (assert) {
    course.findAll(function (error, result) {
    assert.error(error)
    assert.ok(Array.isArray(result))
    assert.end()
  })
})
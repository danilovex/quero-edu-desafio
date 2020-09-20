var app = require('./app.test')
var test = require('tape')

test('the express app should 404 properly', function (assert) {
  app.get('/this-path-not-found').expect(404).end(assert.end)
})
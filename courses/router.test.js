var app = require('../app.test')
var test = require('tape')

test('GET /api/courses should send JSON list', function (assert) {
  app.get('/api/courses')
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end(assert.end)
})

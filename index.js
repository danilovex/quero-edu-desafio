var express = require('express')

var app = express()

app.use('/api', require('./courses/router'))

// error handlers
app.use(require('./errors/not-found'))

module.exports = app
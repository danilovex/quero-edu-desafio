var express = require('express')

//libs for application security
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');

var app = express()

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Prevent parameter pollution
app.use(hpp());

app.get('/*', (req, res, next) => {
    //cache de 30 dias
    res.setHeader("Cache-Control", "public, max-age=2592000");
    res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    next();
});

app.use('/api', require('../courses/router'))
app.use('/api', require('../offers/router'))
app.use('/api', require('../load-data/router'))

// error handlers
app.use(require('../errors/not-found'))

module.exports = app
var course = require('./course-model')
var log = require('bole')('courses/router')
var router = require('express').Router()

function getCourses (req, res) {
  course.findAll(function (error, courses) {
    if (error) {
      log.error(error, 'error finding courses')
      res.status(500).send(error)
      return
    }
    res.json(courses)
  })
}

router.get('/courses', getCourses)

module.exports = router
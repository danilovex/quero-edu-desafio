var ctrl = require('./course-controller')
var log = require('bole')('courses/router')
var router = require('express').Router()

function toView(result){
  return result.map(x => ({
    course:{
      name: x.name,
      kind: x.kind,
      level: x.level,
      shift: x.shift,
      university: {
        name: x.Universities.name,
        score: x.Universities.score,
        logo_url: x.Universities.logo_url
      }
    }
  }));
}

async function getCourses (req, res) {
  try{
    let result = await ctrl.find(req.query);
    res.json(toView(result))
  }catch(error){
    log.error(error, 'error finding courses')
    res.status(500).json()
  }
}

router.get('/courses', getCourses)

module.exports = router
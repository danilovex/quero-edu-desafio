var ctrl = require('./offer-controller')
var log = require('bole')('offers/router')
var router = require('express').Router()

function toView(result){
  return result.map(x => ({
    full_price: x.full_price,
    price_with_discount: x.price_with_discount,
    discount_percentage: x.discount_percentage,
    start_date: x.start_date,
    enrollment_semester: x.enrollment_semester,
    enabled: x.enabled,
    course: {
      name: x.Course.name,
      kind: x.Course.kind,
      level: x.Course.level,
      shift: x.Course.shift
    },
    university: {
      name: x.Universities.name,
      score: x.Universities.score,
      logo_url: x.Universities.logo_url
    },
    campus: {
      name:x.Campus.name,
      city: x.Campus.city
    }
  }));
}

async function getOffers (req, res) {
  try{
    let result = await ctrl.find(req.query);
    res.json(toView(result))
  }catch(error){
    log.error(error, 'error finding courses')
    res.status(500).json()
  }
}

router.get('/offers', getOffers)

module.exports = router
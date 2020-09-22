var ctrl = require('./load-data-controller')
var log = require('bole')('load-data/router')
var router = require('express').Router()

async function loadData (req, res) {
  try{
    let result = await ctrl.loadData();
    //let result = true
    res.json(result)
  }catch(error){
    log.error(error, 'error load data')
    res.status(500).json(error)
  }
}

router.get('/load-data', loadData)

module.exports = router
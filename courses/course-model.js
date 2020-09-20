function findAll (callback) {
    setImmediate(function () {
      callback(null, [
        {id: 1, name: 'Jane Doe'},
        {id: 2, name: 'John Doe'}
      ])
    })
  }
  
  exports.findAll = findAll
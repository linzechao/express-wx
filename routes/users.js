const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res, next) => {
    res.send('user list ...')
  }) 

module.exports = router

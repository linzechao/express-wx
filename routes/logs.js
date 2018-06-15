const express = require('express')
const router = express.Router()

router.route('/').get((req, res, next) => {
  res.json({
    download: 'OK，sa~'
  })
})

module.exports = router

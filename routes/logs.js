const express = require('express')
const router = express.Router()

// 分类
router.route('/').get((req, res, next) => {
  res.json(
    {
      'ok': 'ok'
    }
  )
})

module.exports = router

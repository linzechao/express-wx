const express = require('express')
const router = express.Router()

const SQL = require('../mysql')
const sql = 'select * from bc_operator_menu'

router.route('/').get((req, res, next) => {
  SQL.connect(sql, function (err, result) {
    if (err) {
      res.json({
        code: 500,
        message: err
      })
    }

    res.json({
      code: 200,
      page: null,
      message: 'nice...',
      data: result
    })
  })
})

module.exports = router

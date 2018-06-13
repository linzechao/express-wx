const express = require('express')
const router = express.Router()
// const mongo = require('mongoskin')

const Mock = require('mockjs')

router.route('/')
  .get((req, res, next) => {
    /*
    const db = mongo.db('mongodb://47.75.103.240:27017/express-wx', { native_parser: true })
    db.bind('logs')
    db.logs.find().toArray((err, result) => {
      db.close()
      if (err) throw err
      res.json(result)
    })
    */
    res.json(
      Mock.mock({
        'list|10': [{
          name: '@cname',
          log: '@cparagraph',
          date: '@datetime'
        }]
      })
    )
  }) 

module.exports = router

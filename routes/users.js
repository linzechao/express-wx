const express = require('express')
const router = express.Router()

const Mock = require('mockjs')

// 重定向
router.route('/').get((req, res, next) => {
  res.redirect('/api/users/page/1')
})

// 分页
router.route('/page/:page').get((req, res, next) => {
  const page = +req.params.page || 1
  let result = { list: [] }

  if (page >= 1 && page <= 13) {
    let row = page === 13 ? 6 : 10
    row = `data|${ row }`

    result = Mock.mock({
      [row]: [{
        name: '@cname',
        about: '@cparagraph',
        birthday: '@datetime',
        address: '@city(true)',
        avatar: '@image(100x100, @color)',
        'gender|0-2': 0
      }]
    })
  }

  res.json({
    ...result,
    page: {
      total: 126,
      p: page,
      totalPage: 13
    },
    message: 'nice...'
  })
})

module.exports = router

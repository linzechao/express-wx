var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var logsRouter = require('./routes/logs')

var app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/*
 * 使用静态文件
 * 直接访问
 */
app.use(express.static(path.join(__dirname, 'public')))

/*
 * 处理跨域问题
 */
app.all('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  next()
})

app.use('/', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/logs', logsRouter)

/*
 * 404
 */
app.use((req, res, next) => {
  res.status(404).send({
    message: 'Sorry cant find that!'
  })
})

/*
 * 500
 * 错误处理，必须显性带上 4 个参数
 */
app.use((err, req, res, next) => {
  res.status(500).send({
    message: 'Something broke!'
  })
})

module.exports = app

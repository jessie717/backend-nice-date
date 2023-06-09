const Koa = require('koa')
const { koaBody } = require('koa-body')
const cors = require('koa2-cors')

const errorHandler = require('./errorHandler')
// 注册db
require('../config')
// const { excel2json } = require('../middleware/toJSON.middleware')

const router = require('../route/router')

const app = new Koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())
// app.use(excel2json())

app.on('error', errorHandler)

module.exports = app

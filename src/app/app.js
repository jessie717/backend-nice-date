const Koa = require('koa')
const { koaBody } = require('koa-body')
const cors = require('koa2-cors')

// 注册db
require('../config')

const router = require('../route/router')

const app = new Koa()
app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app

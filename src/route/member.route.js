const Router = require('koa-router')

const { queryAll, queryFemale, queryMale } = require('../controller/member.controller')

const router = new Router()
router.get('/all', queryAll)
router.get('/female', queryFemale)
router.get('/male', queryMale)

module.exports = router

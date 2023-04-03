const Router = require('koa-router')

const memberRoute = require('./member.route')

const router = new Router()
router.use('/member', memberRoute.routes())

module.exports = router

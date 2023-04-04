const Router = require('koa-router')

const {
  getMembers,
  getMemberByGender,
  getMemberById,
  removeMemberById
} = require('../controller/member.controller')

const router = new Router()
router.get('/', getMembers)
router.get('/gender', getMemberByGender)
router.get('/id', getMemberById)
router.get('/delete', removeMemberById)

module.exports = router

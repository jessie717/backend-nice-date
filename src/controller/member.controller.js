const {
  queryMembers,
  queryMemberById,
  queryMemberByGender,
  omitMemberById
} = require('../service/member.service')

const getMembers = async (ctx, next) => {
  try {
    const data = await queryMembers()
    ctx.body = {
      code: 200,
      message: 'query members successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 400,
      message: error
    }
  }
}
const getMemberByGender = async (ctx, next) => {
  try {
    const { gender } = ctx.request.query
    const data = await queryMemberByGender(gender)
    ctx.body = {
      code: 200,
      message: 'query member by gender successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 400,
      message: error
    }
  }
}
const getMemberById = async (ctx, next) => {
  try {
    const { id } = ctx.request.query
    const data = await queryMemberById(id)
    ctx.body = {
      code: 200,
      message: 'query member by id successful',
      data
    }
  } catch (error) {
    ctx.body = {
      code: 400,
      message: error
    }
  }
}
const removeMemberById = async (ctx, next) => {
  try {
    const { id } = ctx.request.query
    await omitMemberById(id)
    ctx.body = {
      code: 200,
      message: 'delete member by id successful'
    }
  } catch (error) {
    ctx.body = {
      code: 400,
      message: error
    }
  }
}

module.exports = { getMembers, getMemberByGender, getMemberById, removeMemberById }

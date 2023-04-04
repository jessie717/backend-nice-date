const {
  findMembers,
  findMemberByGender,
  findMemberById,
  deleteMemberById
} = require('../db/member.db')

const queryMembers = async () => {
  return await findMembers()
}
const queryMemberByGender = async (gender) => {
  return await findMemberByGender(gender)
}
const queryMemberById = async (id) => {
  return await findMemberById(id)
}
const omitMemberById = async (id) => {
  return await deleteMemberById(id)
}

module.exports = { queryMembers, queryMemberByGender, queryMemberById, omitMemberById }

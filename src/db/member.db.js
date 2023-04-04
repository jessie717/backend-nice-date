const { Member } = require('../schema/member.schema')

const findMembers = async () => {
  return await Member.find().sort({ id: -1 })
}
const findMemberByGender = async (gender) => {
  return await Member.findOne({ gender })
}
const findMemberById = async (id) => {
  return await Member.findOne({ id })
}
const deleteMemberById = async (id) => {
  return await Member.deleteOne({ id })
}

module.exports = { findMembers, findMemberByGender, findMemberById, deleteMemberById }

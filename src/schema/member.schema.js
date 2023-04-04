const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  id: { type: String },
  gender: { type: String },
  age: { type: String },
  birthday: { type: String },
  height: { type: String },
  degree: { type: String }, // 学位
  profession: { type: String }, // 职业
  workspace: { type: String }, // 工作地
  wish: { type: String }, // 期望
  remark: { type: String }, // 备注
  referee: { type: String } // 推荐人
})

const Member = mongoose.model('member', memberSchema)

module.exports = { Member }

const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

mongoose.connect(process.env.MONGODB_URL)

const db = mongoose.connection
db.on('err', () => {
  console.log('mongodb 连接失败')
})
db.on('open', () => {
  console.log('mongodb 连接成功')
})

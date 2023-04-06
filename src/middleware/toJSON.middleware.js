const fs = require('fs')
const path = require('path')
const xlsx = require('node-xlsx')

const excel2json = async (ctx, next) => {
  const dir = path.resolve(__dirname, '..', 'excel')
  fs.readdir(dir, (err, files) => {
    files.forEach((file, index) => {
      const readPath = path.resolve(dir, file)
      const excel = xlsx.parse(readPath)
      const member = {}
      const basename = file.slice(0, file.indexOf('.'))
      excel.forEach(({ name, data }) => {
        if (name === '苏男') {
          member.male = data.filter((d, index) => index > 1)
          const wp = path.resolve(__dirname, '..', 'data', `${basename}-male.json`)
          fs.writeFile(wp, JSON.stringify(transferDataToJson(member.male)), 'utf-8', (err) => {
            if (err) throw err
            console.log('成功')
            // TODO: 入表
          })
        } else if (name === '苏女') {
          member.female = data.filter((d, index) => index > 1)
          const wp = path.resolve(__dirname, '..', 'data', `${basename}-female.json`)
          fs.writeFile(wp, JSON.stringify(transferDataToJson(member.male)), 'utf-8', (err) => {
            if (err) throw err
            console.log('成功')
            // TODO: 入表
          })
        }
      })
    })
  })
}

const transferDataToJson = (data) => {
  return data.map((d) => {
    const obj = {}
    // 编号 性别 出生年月 身高 学历 单位 个人信息 期望要求 年酸 职业 推荐人
    obj['id'] = d[0]
    obj['gender'] = d[1]
    obj['birthday'] = d[2]
    obj['height'] = d[3]
    obj['degree'] = d[4]
    obj['workplace'] = d[5]
    obj['info'] = d[6]
    obj['wish'] = d[7]
    obj['age'] = d[8]
    obj['profession'] = d[9]
    obj['referee'] = d[10]
    return obj
  })
}
// excel2json()
module.exports = { excel2json }

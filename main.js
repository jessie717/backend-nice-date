const app = require('./src/app/app')

app.listen(process.env.MONGODB_PORT, () => {
  console.log(`server is running on: ${process.env.MONGODB_PORT}`)
})

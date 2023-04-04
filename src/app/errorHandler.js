module.exports = (err, ctx) => {
  ctx.status = err.code
  ctx.body = err
}

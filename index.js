const fs = require('fs')
const path = require('path')
const Express = require('express')
const { default: makeServerMiddleware } = require('./build/server')
const PORT = 3000

const assets = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), './build/asset-manifest.json'))
)

const app = Express()
app.use(Express.static(path.resolve(process.cwd(), './build')))
app.get('*', makeServerMiddleware(assets))
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})

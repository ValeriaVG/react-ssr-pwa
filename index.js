const fs = require('fs')
const path = require('path')
const Express = require('express')
const shrinkRay = require('shrink-ray-current')
const { default: makeServerMiddleware } = require('./build/server')
const PORT = process.argv[2] || 3000

const assets = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), './build/asset-manifest.json'))
)

const app = Express()

app.use(shrinkRay())

// Helper function to turn snake_case to camelCase
const camelize = str => {
  return str
    .replace('-', ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase()
    })
    .replace(/\s+/g, '')
}

app.get('/_icon/:name', (req, res) => {
  const name = req.params.name
  const iconName = camelize('fa-' + name)
  const icon = require('@fortawesome/free-solid-svg-icons/' + iconName)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(icon))
})

// We generate all the js files in the same folder
// But we don't want to render server.js or server.js.map
app.use((req, res, next) => {
  if (req.path.match(/server\.js/)) {
    return res.status(404).end('Not Found')
  }
  next()
})

app.use(
  Express.static(path.resolve(process.cwd(), './build'), { index: false })
)

app.get('*', makeServerMiddleware(assets))
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
})

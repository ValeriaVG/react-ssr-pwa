import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { Helmet } from 'react-helmet'
import { matchRoutes } from 'react-router-config'
import routes from './routes'
import App from './App'
import renderAssets from './lib/renderAssets'
import getIcon from './pages/icon/getIcon'

const makeServerMiddleware = ({ files }) => {
  const { cssLinks, scripts } = renderAssets(files)
  // Returns middleware
  return async (req, res) => {
    const [currentRoute] = matchRoutes(routes, req.path)
    const state = {}
    if (
      currentRoute &&
      currentRoute.match &&
      currentRoute.match.path === '/icon/:name'
    ) {
      state.icon = await getIcon(currentRoute.match.params.name)
    }
    const renderedApp = ReactDOMServer.renderToString(
      <StaticRouter location={req.path} context={{ req, res }}>
        <App {...state} />
      </StaticRouter>
    )
    const helmet = Helmet.renderStatic()
    const html = `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${cssLinks}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${renderedApp}</div>
        <script>window.APP_STATE=${JSON.stringify(state)}</script>
        ${scripts}
      </body>
    </html>`
    res.send(html)
  }
}

export default makeServerMiddleware

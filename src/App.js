import { renderRoutes } from 'react-router-config'
import routes from './routes'
import './App.css'

function App(props) {
  return renderRoutes(routes, props)
}

export default App

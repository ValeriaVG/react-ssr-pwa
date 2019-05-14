import Home from './pages/home'
import Icon from './pages/icon'
import NotFound from './pages/404'

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/icon/:name', component: Icon, exact: true },
  { path: '**', component: NotFound },
]

export default routes

import fetch from 'universal-fetch'

const config = {
  development: {
    url: 'http://localhost:3000',
  },
  production: {
    url: 'http://localhost:5000',
  },
}

const getIcon = iconName =>
  fetch(`${config[process.env.NODE_ENV].url}/_icon/${iconName}`)
    .then(res => res.json())
    .catch(() => {})
export default getIcon

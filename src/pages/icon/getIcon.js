import fetch from 'universal-fetch'
const getIcon = iconName =>
  fetch(`http://localhost:3000/_icon/${iconName}`)
    .then(res => res.json())
    .catch(() => {})
export default getIcon

const getIcon = iconName =>
  fetch(`/_icon/${iconName}`)
    .then(res => res.json())
    .catch(() => {})
export default getIcon

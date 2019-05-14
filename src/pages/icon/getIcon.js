const getIcon = iconName => fetch(`/_icon/${iconName}`).then(res => res.json())
export default getIcon

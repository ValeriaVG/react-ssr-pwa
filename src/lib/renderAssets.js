const renderAssets = (files = {}) => {
  const cssLinks = [files['main.css']]
    .filter(asset => Boolean(asset))
    .map(url => `<link rel="stylesheet" href="${url}" async />`)
    .join('')
  const scripts = [
    files['runtime~main.js'],
    files['vendors~main.js'],
    files['main.js'],
  ]
    .filter(asset => Boolean(asset))
    .map(url => `<script src="${url}" defer></script>`)
    .join('')
  return { cssLinks, scripts }
}
export default renderAssets

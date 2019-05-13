import React from 'react'
import { Helmet } from 'react-helmet'

export default class Icon extends React.PureComponent {
  state = {
    isLoaded: false,
  }
  async componentDidMount() {
    const { library } = await import('@fortawesome/fontawesome-svg-core')
    const { FontAwesomeIcon } = await import('@fortawesome/react-fontawesome')
    const { fas } = await import('@fortawesome/free-solid-svg-icons')
    library.add(fas)
    this.library = library
    this.FontAwesomeIcon = FontAwesomeIcon
    this.setState({ isLoaded: true })
  }
  render() {
    const name = this.props.match.params.name
    return (
      <>
        <Helmet>
          <title> Icon {name}</title>
          <meta name="description" content={`Icon ${name}`} />
        </Helmet>
        <div className="App">
          <header className="App-header">
            {this.state.isLoaded && (
              <this.FontAwesomeIcon icon={name} prefix="fas" size="10x" />
            )}
            <h1>Icon {name}</h1>
          </header>
        </div>
      </>
    )
  }
}

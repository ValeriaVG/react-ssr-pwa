import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import getIcon from './getIcon'
import NotFound from '../404'

export default class Icon extends React.PureComponent {
  state = {
    isLoaded: false,
    notFound: false,
  }

  async loadIcon() {
    const iconName = this.props.match.params.name

    if (
      !this.library.definitions.fas ||
      !this.library.definitions.fas[iconName]
    ) {
      // Load icon only if it doesn't exist in the library
      this.setState({ isLoaded: false })
      try {
        const icon = await getIcon(iconName)
        if (!icon) return this.setState({ notFound: true })
        this.library.add(icon.definition)
      } catch (error) {
        // console.error('loading error:', error)
      }
    }
    this.setState({ isLoaded: true })
  }

  async componentDidMount() {
    const { library } = await import('@fortawesome/fontawesome-svg-core')
    const { FontAwesomeIcon } = await import('@fortawesome/react-fontawesome')
    this.library = library
    this.FontAwesomeIcon = FontAwesomeIcon

    if (window.APP_STATE && window.APP_STATE.icon) {
      this.library.add(window.APP_STATE.icon.definition)
    }
    await this.loadIcon()
  }

  componentDidUpdate(props) {
    // If the component is rendered and the name has changed - update
    // This happens when we click the link that leads to the same page for example
    if (this.props.match.params.name !== props.match.params.name) {
      this.setState({ isLoaded: false })
      this.loadIcon()
    }
  }

  render() {
    if ((this.props.staticContext && !this.props.icon) || this.state.notFound)
      return <NotFound {...this.props} />
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
            <Link to="/icon/circle" className="App-link">
              Circle
            </Link>
            <br />
            <Link to="/icon/home" className="App-link">
              Home
            </Link>
          </header>
        </div>
      </>
    )
  }
}

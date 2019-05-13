import React from 'react'
import { Helmet } from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const Icon = ({ match }) => (
  <>
    <Helmet>
      <title> Icon {match.params.name}</title>
      <meta name="description" content={`Icon ${match.params.name}`} />
    </Helmet>
    <div className="App">
      <header className="App-header">
        <FontAwesomeIcon icon={match.params.name} prefix="fas" size="10x" />
        <h1>Icon {match.params.name}</h1>
      </header>
    </div>
  </>
)
export default Icon

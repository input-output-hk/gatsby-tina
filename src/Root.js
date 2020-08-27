import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'

const Root = ({ element }) => (
  <Location>
    {({ location }) => (
      <Fragment>
        {element}
      </Fragment>
    )}
  </Location>
)

Root.propTypes = {
  element: PropTypes.node.isRequired
}

export default Root

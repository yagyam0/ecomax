/* eslint-disable react/prop-types */
import React from 'react'

const PublicRoute = ({ Component, ...rest }) => {
  return (
      <Component {...rest} />
  )
}

export default PublicRoute;
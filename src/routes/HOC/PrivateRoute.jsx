/* eslint-disable react/prop-types */
import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, Component, ...rest }) => {
    return (
        isAuthenticated ? (
            <Component {...rest} />
        ) : (
            <Navigate to={{ pathname: '/' }} replace />
        )
    )
}

export default PrivateRoute;
/* eslint-disable react/prop-types */
import React from 'react'
import PrivateRoute from './HOC/PrivateRoute';
import PublicRoute from './HOC/PublicRoute';

const RouteValidator = ({ route }) => {

    const isUserAuthenticated = true;
    const { component, isPrivate } = route;

    return (
        <>
            {
                isPrivate ? (
                    <PrivateRoute
                        isAuthenticated={isUserAuthenticated}
                        Component={component}
                    />
                ) : (
                    <PublicRoute
                        Component={component}
                    />
                )
            }
        </>
    )
}

export default RouteValidator;
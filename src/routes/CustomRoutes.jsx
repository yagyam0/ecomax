/* eslint-disable react/jsx-key */
import React, { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { routeList } from './routeList';
import RouteValidator from './RouteValidator';
import NotFound from '../pages/NotFound';
import Loader from '../components/Loader';

const CustomRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routeList.map(route => (
                    <Fragment key={route.path}>
                        <Route
                            path={route.path}
                            element={<RouteValidator route={route} />}
                        />
                        <Route
                            path="*"
                            element={<NotFound />}
                        />
                    </Fragment>
                ))}
            </Routes>
        </Suspense>
    )
}

export default CustomRoutes;
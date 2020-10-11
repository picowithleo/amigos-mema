import React from 'react';
import {isLoggedIn} from '../utils/auth';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = props => {
    const { component: ProtectedComponent, ...rest } = props;
    return (
        <Route
            {...rest}
            render = {routeProps => {
                if (!isLoggedIn()) return (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: routeProps.location.pathname },
                    }} />
                );

                return <ProtectedComponent {...routeProps} />
            }}
        />
    );
};

export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthStore } from 'store/auth';

// Check if the user is permitted to access router
const PrivateRoute = (props) => {
    const { children, permissionName, redirectPath = '/dashboard' } = props;
    const { permissionArray, token } = useAuthStore();

    const checkIsPermitted = () => {
        if (permissionArray?.length > 0) {
            return permissionArray?.includes(permissionName);
        } else {
            return false;
        }
    };

    return checkIsPermitted() ? children : <Navigate to={token ? redirectPath : '/login'} replace />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.element,
    permissionName: PropTypes.string,
    redirectPath: PropTypes.string,
};

import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Check if the user is permitted to access router
const PrivateRoute = (props) => {
    const { children, permissionName, redirectPath = '/dashboard' } = props;

    const checkIsPermitted = () => {
        const userPermissionsArray = JSON.parse(localStorage.getItem('permissionArray'));
        if (userPermissionsArray?.length > 0) {
            return userPermissionsArray?.includes(permissionName);
        } else {
            return false;
        }
    };

    return checkIsPermitted() ? children : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.element,
    permissionName: PropTypes.string,
    redirectPath: PropTypes.string,
};

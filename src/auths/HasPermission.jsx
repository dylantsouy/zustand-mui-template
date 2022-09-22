import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const HasPermission = (props) => {
    const { permission, children } = props;
    const [hasPermission, setHasPermission] = useState(false);

    const checkHasPermission = useCallback(async () => {
        // get the user role permission
        const permissionArray = JSON.parse(localStorage.getItem('permissionArray'));
        if (permissionArray) {
            const isPermission = permissionArray.includes(permission);
            setHasPermission(!!isPermission);
        }
    }, [permission]);

    useEffect(() => {
        checkHasPermission();
    }, [checkHasPermission]);

    return hasPermission ? <>{children}</> : '';
};

export default HasPermission;

HasPermission.propTypes = {
    children: PropTypes.element,
    permission: PropTypes.string,
};

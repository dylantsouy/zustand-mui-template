import React from 'react';
import { SnackbarProvider } from 'notistack'; // For snackbar
import SnackCloseBtn from '../components/SnackCloseBtn';
import PropTypes from 'prop-types';

const Snackbar = (props) => {
    const { children } = props;

    return (
        <SnackbarProvider
            autoHideDuration={2500}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            maxSnack={5}
            action={(snackbarKey) => <SnackCloseBtn snackbarKey={snackbarKey} />}
        >
            {children}
        </SnackbarProvider>
    );
};
export default Snackbar;

Snackbar.propTypes = {
    children: PropTypes.element,
};

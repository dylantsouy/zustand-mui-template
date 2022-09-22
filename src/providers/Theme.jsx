import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
    palette: {
        primary: {
            main: '#43a047',
            contrastText: '#fff',
        },
        secondary: {
            main: '#2A1C19',
            contrastText: '#fff',
        },
        gray: {
            main: '#a2a2a2',
            contrastText: '#fff',
        },
        s_primary: {
            main: '#0070f9',
            contrastText: '#fff',
        },
    },
});

const Theme = (props) => {
    const { children } = props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;

Theme.propTypes = {
    children: PropTypes.element,
};

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './styles.scss';
import PropTypes from 'prop-types';

export default function Loading(props) {
    const { color, size } = props;
    return (
        <Box className='loading'>
            <CircularProgress color={color || 'primary'} size={size} />
        </Box>
    );
}

Loading.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number,
};

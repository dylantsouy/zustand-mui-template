import { IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { useSnackbar } from 'notistack';
import * as React from 'react';
import PropTypes from 'prop-types';

function SnackCloseBtn(props) {
    const { snackbarKey } = props;
    const { closeSnackbar } = useSnackbar();

    return (
        <IconButton className='close-snackbarBtn' onClick={() => closeSnackbar(snackbarKey)}>
            <Close style={{ color: '#fff' }} />
        </IconButton>
    );
}

export default SnackCloseBtn;

SnackCloseBtn.propTypes = {
    snackbarKey: PropTypes.number,
};

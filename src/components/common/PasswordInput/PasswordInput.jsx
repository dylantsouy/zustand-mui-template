import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function PasswordInput(props) {
    const [showPassword, setShowPassword] = useState(false);
    const { onChange, value, variant, error, helperText, required, disabled } = props;
    return (
        <TextField
            margin='dense'
            label={'密碼'}
            id='password'
            type={showPassword ? 'text' : 'password'}
            value={value}
            fullWidth
            disabled={disabled}
            required={required}
            variant={variant || 'standard'}
            onChange={onChange}
            error={error}
            helperText={helperText}
            InputProps={{
                // <-- This is where the toggle button is added.
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

PasswordInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    variant: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

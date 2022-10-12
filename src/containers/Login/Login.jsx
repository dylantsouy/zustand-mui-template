import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import './styles.scss';
import ConfirmButton from 'components/common/ConfirmButton';
import PasswordInput from 'components/common/PasswordInput';
import { permissionHandler } from 'auths/permission';
import { useAuthStore } from 'store/auth';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'langs/useTranslation';

export default function Login() {
    const { setAuthValue } = useAuthStore();
    const { t } = useTranslation('common');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ account: '', password: '' });
    const [validation, setValidation] = useState({
        account: { valid: true, error: '' },
        password: { valid: true, error: '' },
    });

    const login = async (data, setValidation, setLoading) => {
        setAuthValue('user', { name: 123 });
        setAuthValue('token', 'test');
        setAuthValue('permissionArray', permissionHandler(0));
        setLoading(false);
        enqueueSnackbar('登入成功', { variant: 'success' });
        navigate('/dashboard');
    };

    const onChange = (e) => {
        setValidation({
            account: { valid: true, error: '' },
            password: { valid: true, error: '' },
        });
        setForm({
            ...form,
            [e.target.id]: e.target.value,
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!form.account || !form.password) {
            setValidation({
                account: {
                    valid: !!form.account,
                    error: !form.account ? '此欄位必填' : '',
                },
                password: {
                    valid: !!form.password,
                    error: !form.password ? '此欄位必填' : '',
                },
            });
            setLoading(false);
        } else {
            login(form, setValidation, setLoading);
        }
    };

    return (
        <>
            <div className='login-wrapper'>
                <div className='modal'>
                    <h1>Logo</h1>
                    <h2>{t('dashboard')}</h2>
                    <form className='root' noValidate onSubmit={onSubmit}>
                        <TextField
                            id='account'
                            label={'Email'}
                            variant='outlined'
                            onChange={onChange}
                            error={!validation.account.valid}
                            helperText={validation.account.error}
                        />
                        <PasswordInput
                            variant='outlined'
                            onChange={onChange}
                            error={!validation.password.valid}
                            helperText={validation.password.error}
                        />
                        <div className='mt-2' />
                        <ConfirmButton variant='contained' type='submit' loading={loading} text={'登入'} />
                    </form>
                    <div className='version'>v1.0.0</div>
                </div>
            </div>
        </>
    );
}

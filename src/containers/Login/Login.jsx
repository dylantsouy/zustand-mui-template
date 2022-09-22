import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../auths/Auth';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import './styles.scss';
import ConfirmButton from '../../components/ConfirmButton';
import PasswordInput from '../../components/PasswordInput';

export default function Login() {
    const { login, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ account: '', password: '' });
    const [validation, setValidation] = useState({
        account: { valid: true, error: '' },
        password: { valid: true, error: '' },
    });

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

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <h2>Subtitle</h2>
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

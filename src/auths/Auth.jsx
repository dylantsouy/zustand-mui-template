import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { permissionHandler } from './permission';
// import { loginApi } from '../apis/postApi';

export const AuthContext = React.createContext({});
export default function Auth(props) {
    const { children } = props;
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    // Check if the user login
    const checkAuth = async () => {
        let userData = JSON.parse(localStorage.getItem('user'));
        let token = JSON.parse(localStorage.getItem('token'));
        if (!token) {
            localStorage.clear();
            setUserInfo({});
            setIsAuthenticated(false);
            setIsLoading(false);
            navigate('/login');
            return;
        }
        setUserInfo(userData);
        setIsAuthenticated(true);
        setIsLoading(false);
    };

    // Login func
    const login = async (data, setValidation, setLoading) => {
        localStorage.setItem('token', JSON.stringify('test'));
        localStorage.setItem('user', JSON.stringify({}));
        localStorage.setItem('permissionArray', JSON.stringify(permissionHandler(0)));
        setIsAuthenticated(true);
        setLoading(false);
        enqueueSnackbar('登入成功', { variant: 'success' });
        navigate('/dashboard');
        // loginApi(data)
        //     .then(async (res) => {
        //         const { success, result } = res;
        //         if (success) {
        //             // save token to localStorage
        //             localStorage.setItem('token', JSON.stringify(result.token));
        //             // save user infor to localStorage
        //             localStorage.setItem('user', JSON.stringify(result.user_info));
        //             // save permission list to localStorage for check if user have permission to access router
        //             localStorage.setItem('permissionArray', JSON.stringify(permissionHandler(result?.user_info?.role)));

        //             setUserInfo(result.user_info);
        //             setIsAuthenticated(true);
        //             setLoading(false);
        //             enqueueSnackbar('登入成功', { variant: 'success' });
        //             navigate('/dashboard');
        //         }
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //         setValidation({
        //             account: { valid: false, error: '' },
        //             password: { valid: false, error: `登入失敗` },
        //         });
        //     });
    };

    // Logout func
    const logout = async () => {
        // call Logout API
        localStorage.clear();
        setUserInfo({});
        navigate('/login');
        setIsAuthenticated(false);
        enqueueSnackbar('登出成功', { variant: 'success' });
    };

    return (
        // AuthContext.Provider will wrap the components
        // The wrapped components can use the value sent from the AuthContext.Provider
        // To use the value, the wrapped components should delcare 'useContext(AuthContext)'
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, checkAuth, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
}

Auth.propTypes = {
    children: PropTypes.element,
};

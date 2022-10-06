import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'components/common/Header';
import PropTypes from 'prop-types';
import Sidebar from 'components/common/Sidebar';
import './styles.scss';
import { useAuthStore } from 'store/auth';

const Layout = (props) => {
    const { children } = props;
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { token, clear } = useAuthStore();

    const pageHandler = () => {
        switch (pathname) {
            case '/login':
                return (
                    <>
                        <Header login={true} />
                        {children}
                    </>
                );

            default:
                return (
                    <div className='main'>
                        <Sidebar />
                        <div className='main-inner'>
                            <Header />
                            {children}
                        </div>
                    </div>
                );
        }
    };

    useEffect(() => {
        if (token && pathname === '/login') {
            navigate('/dashboard');
            return;
        }
        if (pathname !== 'login' && !token) {
            clear();
            navigate('/login');
            return;
        }
    }, [clear, navigate, pathname, token]);

    return pageHandler();
};
export default Layout;

Layout.propTypes = {
    children: PropTypes.element,
};

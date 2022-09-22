import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auths/Auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import './styles.scss';

const Layout = (props) => {
    const { children } = props;
    const { pathname } = useLocation();
    // Declare the useContext() so this component will have the same context as AuthContext.Provider
    const { isAuthenticated, isLoading, checkAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    // To check if still have Authenticated when router change
    useEffect(() => {
        checkAuth(navigate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, navigate]);

    if (isLoading) {
        // Full page loading
        return <Loading size={60} />;
    }

    return (
        <>
            {pathname === '/login' ? (
                <>
                    <Header login={true} />
                    {children}
                </>
            ) : pathname === '/situationRoom' ? (
                <>{children}</>
            ) : (
                <div className='main'>
                    <Sidebar />
                    <div className='main-inner'>
                        <Header />
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};
export default Layout;

Layout.propTypes = {
    children: PropTypes.element,
};

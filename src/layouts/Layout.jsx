import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../auths/Auth';
import { useLocation } from 'react-router-dom';
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
    // To check if still have Authenticated when router change
    useEffect(() => {
        checkAuth();
    }, [checkAuth, isAuthenticated]);

    if (isLoading || (!isAuthenticated && pathname !== '/login')) {
        // Full page loading
        return <Loading size={60} />;
    }

    return <>{pageHandler()}</>;
};
export default Layout;

Layout.propTypes = {
    children: PropTypes.element,
};

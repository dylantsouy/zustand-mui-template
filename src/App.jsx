import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Theme from './providers/Theme';
import Layout from './layouts/Layout';
import Snackbar from './providers/Snackbar';
import Store from './contexts/StoreContext';
import Auth from './auths/Auth';
import Login from './containers/Login/Login';
import Page404 from './containers/Page404/Page404';
import Dashboard from './containers/Dashboard';
import PrivateRoute from './auths/PrivateRoute';
import { LanguageProvider } from './langs/LanguageProvider';

function App() {
    return (
        <Theme>
            <Snackbar>
                <LanguageProvider>
                    <Store>
                        <Auth>
                            <Layout>
                                <Routes>
                                    <Route
                                        index
                                        path='/dashboard'
                                        element={
                                            <PrivateRoute permissionName='dashboard'>
                                                <Dashboard />
                                            </PrivateRoute>
                                        }
                                    />
                                    <Route index path='/login' element={<Login />} />
                                    <Route path='/' element={<Navigate to='/dashboard' replace />} />
                                    <Route path='*' element={<Page404 />} />
                                </Routes>
                            </Layout>
                        </Auth>
                    </Store>
                </LanguageProvider>
            </Snackbar>
        </Theme>
    );
}

export default App;

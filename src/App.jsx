import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Theme from './providers/Theme';
import Layout from './layouts/Layout';
import Snackbar from './providers/Snackbar';
import Login from './containers/Login/Login';
import Page404 from './containers/Page404/Page404';
import Dashboard from './containers/Dashboard';
import PrivateRoute from './auths/PrivateRoute';
import { LanguageProvider } from './langs/LanguageProvider';
import Compose from 'providers/Compose';

function App() {
    return (
        <Compose components={[Theme, Snackbar, LanguageProvider, Layout]}>
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
        </Compose>
    );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthPage } from '../../pages/auth';
import { MainPage } from '../../pages/main';
import { Layout } from '../../pages/layout';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<MainPage />} />
                <Route path='/auth' element={<AuthPage />} />
            </Route>
        </Routes>
    );
};
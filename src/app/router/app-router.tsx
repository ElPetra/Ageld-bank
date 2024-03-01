import { Routes, Route } from 'react-router-dom';

import { AuthPage } from 'src/pages/auth';
import { MainPage } from 'src/pages/main';
import { Layout } from 'src/pages/layout';

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
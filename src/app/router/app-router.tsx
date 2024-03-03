import { Route, Routes } from 'react-router-dom';
import { AuthPage } from 'src/pages/auth';
import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';

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

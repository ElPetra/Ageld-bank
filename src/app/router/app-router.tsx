import { Route, Routes } from 'react-router-dom';
import { AuthPage } from 'src/pages/auth';
import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { PublicContractPage } from 'src/pages/publicContract';
import { RegisterPage } from 'src/pages/register';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index path='/' element={<MainPage />} />
                <Route path='/auth' element={<AuthPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route
                    path='/public-contract'
                    element={<PublicContractPage />}
                />
            </Route>
        </Routes>
    );
};

import { Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from 'src/pages/authorization';
import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { PublicContractPage } from 'src/pages/public-contract';
import { RegistrationPage } from 'src/pages/registration';

import { RouteName } from 'src/shared/model';

import type { RouteDescription } from 'src/shared/model';

const { MAIN_PAGE, REGISTRATION_PAGE, LOGIN_PAGE, PUBLIC_CONTRACT_PAGE } =
    RouteName;

const publicRoutes: RouteDescription[] = [
    {
        path: MAIN_PAGE,
        component: MainPage
    },
    {
        path: REGISTRATION_PAGE,
        component: RegistrationPage
    },
    {
        path: LOGIN_PAGE,
        component: AuthorizationPage
    },
    {
        path: PUBLIC_CONTRACT_PAGE,
        component: PublicContractPage
    }
];

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {publicRoutes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Route>
        </Routes>
    );
};

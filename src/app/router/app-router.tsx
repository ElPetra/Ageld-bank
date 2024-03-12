import { Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from 'src/pages/authorization';
import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { RegistrationPage } from 'src/pages/registration';

import { RouteName } from 'src/shared/model';

import type { RouteDescription } from 'src/shared/model';

const { MAIN_PAGE, REGISTRATION_PAGE, LOGIN_PAGE } = RouteName;

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

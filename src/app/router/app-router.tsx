import { Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from 'src/pages/authorization';
import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { RegistrationPage } from 'src/pages/registration';

import { RouteName } from 'src/shared/model';

import { SuccessPage } from 'src/pages/success';
import { AccountInfo } from 'src/widgets/account-info';

import { PersonalPage } from 'src/pages/personal';

import { NotificationHistoryPage } from 'src/pages/notification/ui';

import type { RouteDescription } from 'src/shared/model';

const {
    MAIN_PAGE,
    REGISTRATION_PAGE,
    LOGIN_PAGE,
    SUCCESS_PAGE,
    ACCOUNT,
    PERSONAL_AREA_PAGE,
    NOTIFICATION_HISTORY_PAGE
} = RouteName;

const publicRoutes: RouteDescription[] = [
    {
        path: MAIN_PAGE,
        component: MainPage
    },
    {
        path: ACCOUNT,
        component: AccountInfo
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
        path: PERSONAL_AREA_PAGE,
        component: PersonalPage
    },
    {
        path: SUCCESS_PAGE,
        component: SuccessPage
    },
    {
        path: NOTIFICATION_HISTORY_PAGE,
        component: NotificationHistoryPage
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

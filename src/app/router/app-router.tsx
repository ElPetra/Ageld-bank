import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { AuthorizationPage } from 'src/pages/authorization';
import { RegistrationPage } from 'src/pages/registration';
import { RecoveryPasswordPage } from 'src/pages/recovery';
import { SuccessPage } from 'src/pages/success';
import { PersonalPage } from 'src/pages/personal';
import { NotificationHistoryPage } from 'src/pages/notification';
import { AccountPage } from 'src/pages/accounts';
import { CardPage } from 'src/pages/cards';
import { CustomToaster } from 'src/widgets/toaster';
import { RouteName } from 'src/shared/model';

import { CreationResult } from 'src/widgets/account-creation/ui/content/CreationResult';
import { AccountCreation } from 'src/widgets/account-creation/ui';

import { ProtectedRoute } from './protected-route';

import type { RouteDescription } from 'src/shared/model';

const {
    MAIN_PAGE,
    REGISTRATION_PAGE,
    LOGIN_PAGE,
    SUCCESS_PAGE,
    CARD_PAGE,
    ACCOUNT_PAGE,
    PERSONAL_PAGE,
    NOTIFICATION_HISTORY_PAGE,
    RECOVERY_PASSWORD_PAGE
} = RouteName;

const publicRoutes: RouteDescription[] = [
    {
        path: REGISTRATION_PAGE,
        component: RegistrationPage
    },
    {
        path: LOGIN_PAGE,
        component: AuthorizationPage
    },
    {
        path: RECOVERY_PASSWORD_PAGE,
        component: RecoveryPasswordPage
    },
    {
        path: SUCCESS_PAGE,
        component: SuccessPage
    }
];

const authRoutes: RouteDescription[] = [
    {
        path: MAIN_PAGE + '/:id?',
        component: MainPage
    },
    {
        path: ACCOUNT_PAGE + '/create',
        component: AccountCreation
    },
    {
        path: ACCOUNT_PAGE + '/create/:creationResult?',
        component: CreationResult
    },
    {
        path: ACCOUNT_PAGE + '/:id',
        component: AccountPage
    },
    {
        path: PERSONAL_PAGE + '/:id?',
        component: PersonalPage
    },
    {
        path: NOTIFICATION_HISTORY_PAGE,
        component: NotificationHistoryPage
    }
];

export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Layout />
                        <CustomToaster />
                    </>
                }
            >
                {publicRoutes.map(({ path, component: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {authRoutes.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <ProtectedRoute>
                                <Component />
                            </ProtectedRoute>
                        }
                    />
                ))}
            </Route>
        </Routes>
    );
};

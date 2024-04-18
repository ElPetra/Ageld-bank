import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { AuthorizationPage } from 'src/pages/authorization';
import { RegistrationPage } from 'src/pages/registration';
import { RecoveryPasswordPage } from 'src/pages/recovery';
import { PersonalPage } from 'src/pages/personal';
import { NotificationHistoryPage } from 'src/pages/notification';
import { CustomToaster } from 'src/widgets/toaster';
import { ContactsPage } from 'src/pages/contacts';

import { CREATE, RouteName, type RouteDescription } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { AccountPage } from 'src/pages/accounts';
import { AccountCreation } from 'src/widgets/account-creation';
import { CardPage } from 'src/pages/cards';

import { ProtectedRoute } from './protected-route';

const {
    CARD_PAGE,
    MAIN_PAGE,
    REGISTRATION_PAGE,
    LOGIN_PAGE,
    ACCOUNT_PAGE,
    PERSONAL_PAGE,
    NOTIFICATION_HISTORY_PAGE,
    RECOVERY_PASSWORD_PAGE,
    CONTACTS_PAGE
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
        path: CONTACTS_PAGE,
        component: ContactsPage
    }
];

const authRoutes: RouteDescription[] = [
    {
        path: MAIN_PAGE + '/:id?/:id2?',
        component: MainPage
    },
    {
        path: ACCOUNT_PAGE + '/' + CREATE,
        component: AccountCreation
    },
    {
        path: ACCOUNT_PAGE + '/:id',
        component: AccountPage
    },
    {
        path: CARD_PAGE + '/:id',
        component: CardPage
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
    const { authChecked, isLoading } = useAuth();
    useEffect(() => {
        authChecked();
    }, [authChecked]);
    if (isLoading) {
        return <>Loading...</>;
    }
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

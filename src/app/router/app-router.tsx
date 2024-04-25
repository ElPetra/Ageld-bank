import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { AuthorizationPage } from 'src/pages/authorization';
import { RegistrationPage } from 'src/pages/registration';
import { RecoveryPasswordPage } from 'src/pages/recovery';
import { PersonalPage } from 'src/pages/personal';
import { NotificationHistoryPage } from 'src/pages/notification';
import { AccountPage } from 'src/pages/accounts';
import { CardPage } from 'src/pages/cards';
import { ContactsPage } from 'src/pages/contacts';
import { ATMsBranchesPage } from 'src/pages/atms-branches';

import { AccountCreation } from 'src/widgets/account-creation';
import { useAuth } from 'src/entities/user';
import { CREATE, RouteName } from 'src/shared/model';
import { Preloader } from 'src/shared/ui';

import { ProtectedRoute } from './protected-route';

import type { RouteDescription } from 'src/shared/model';

const {
    MAIN_PAGE,
    REGISTRATION_PAGE,
    LOGIN_PAGE,
    CARD_PAGE,
    ACCOUNT_PAGE,
    PERSONAL_PAGE,
    NOTIFICATION_HISTORY_PAGE,
    RECOVERY_PASSWORD_PAGE,
    CONTACTS_PAGE,
    ATMS_AND_BRANCHES
} = RouteName;

const publicRoutes: RouteDescription[] = [
    {
        path: MAIN_PAGE + '/:id?/:id2?',
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
        path: RECOVERY_PASSWORD_PAGE,
        component: RecoveryPasswordPage
    },
    {
        path: CONTACTS_PAGE,
        component: ContactsPage
    },
    {
        path: ATMS_AND_BRANCHES,
        component: ATMsBranchesPage
    },
    {
        path: CARD_PAGE + '/:id',
        component: CardPage
    }
];

const authRoutes: RouteDescription[] = [
    {
        path: ACCOUNT_PAGE + '/' + CREATE,
        component: AccountCreation
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
    const { authChecked, isLoading } = useAuth();

    useEffect(() => {
        authChecked();
    }, [authChecked]);

    return isLoading ? (
        <Preloader />
    ) : (
        <Routes>
            <Route path='/' element={<Layout />}>
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

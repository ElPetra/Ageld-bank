import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'src/pages/layout';
import { MainPage } from 'src/pages/main';
import { AuthorizationPage } from 'src/pages/authorization';
import { RegistrationPage } from 'src/pages/registration';
import { RecoveryPasswordPage } from 'src/pages/recovery';
import { PersonalPage } from 'src/pages/personal';
import { NotificationHistoryPage } from 'src/pages/notification';
import { CardPage } from 'src/pages/card';
import { AccountPage } from 'src/pages/account';
import { AccountCreationPage } from 'src/pages/account-creation';
import { CardProductPage } from 'src/pages/card-product';
import { ContactsPage } from 'src/pages/contacts';
import { ATMsBranchesPage } from 'src/pages/atms-branches';

import { useAuth } from 'src/entities/user';
import { AuthStatus, CREATE, RouteName } from 'src/shared/model';
import { Preloader } from 'src/shared/ui';

import { ProtectedRoute } from './protected-route';

import type { RouteDescription } from 'src/shared/model';

const {
    MAIN_PAGE,
    REGISTRATION_PAGE,
    LOGIN_PAGE,
    CARD_PRODUCT_PAGE,
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
        path: CARD_PRODUCT_PAGE + '/:id',
        component: CardProductPage
    }
];

const authRoutes: RouteDescription[] = [
    {
        path: ACCOUNT_PAGE + '/' + CREATE,
        component: AccountCreationPage
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
    const { authChecked, authStatus } = useAuth();
    const isSend = useRef<boolean>(false);

    useEffect(() => {
        if (!isSend.current) {
            authChecked();
            isSend.current = true;
        }
    }, [authChecked]);

    return authStatus === AuthStatus.Loading ? (
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

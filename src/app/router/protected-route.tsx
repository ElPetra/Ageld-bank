import { Navigate } from 'react-router-dom';

import { RouteName } from 'src/shared/model';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function ProtectedRoute({ children }: Props) {
    const isAuth = true;
    return isAuth ? (
        <>{children}</>
    ) : (
        <Navigate to={RouteName.LOGIN_PAGE} replace />
    );
}

import { AuthStatus } from 'src/shared/model';
import { useAuth } from 'src/entities/user';
import { MessageCard } from 'src/entities/message';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function ProtectedMain({ children }: Props) {
    const { authStatus } = useAuth();

    return authStatus === AuthStatus.SignedIn ? (
        children
    ) : (
        <MessageCard
            icon='paper-airplane-lady'
            width={400}
            title='Для просмотра данной информации вы должны быть авторизованы'
            buttonText='Войти в кабинет'
        />
    );
}

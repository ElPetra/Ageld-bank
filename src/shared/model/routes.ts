import type { ComponentType } from 'react';

export const RouteName = {
    ACCOUNT: '/accounts/:id?', // временное решение для удобства работы над фичей
    ACCOUNTS: '/accounts', // временное решение для удобства работы над фичей
    CARD: '/cards/:id?',
    CARDS: '/cards',
    MAIN_PAGE: '/',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PERSONAL_AREA_PAGE: '/personal',
    SUCCESS_PAGE: '/success',
    NOTIFICATION_HISTORY_PAGE: '/notifications',
    RECOVERY_PASSWORD_PAGE: '/recovery'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

import type { ComponentType } from 'react';

export const RouteName = {
    ACCOUNT: '/accounts/:id?', // временное решение для удобства работы над фичей
    ACCOUNTS: '/accounts', // временное решение для удобства работы над фичей
    MAIN_PAGE: '/',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    SUCCESS_PAGE: '/success'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

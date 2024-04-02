import type { ComponentType } from 'react';

export const RouteName = {
    ACCOUNT: '/accounts/:id?', // временное решение для удобства работы над фичей
    ACCOUNTS: '/accounts', // временное решение для удобства работы над фичей
    MAIN_PAGE_BASE: '',
    MAIN_PAGE: '/1',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PERSONAL_PAGE_BASE: '/personal',
    PERSONAL_PAGE: '/personal/1',
    SUCCESS_PAGE: '/success',
    NOTIFICATION_HISTORY_PAGE: '/notifications',
    RECOVERY_PASSWORD_PAGE: '/recovery'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}
export const MAIN = '/1';
export const CARDS = '/2';
export const ACCOUNTS = '/3';
export const TRANSFERS = '/4';
export const PAYMENTS = '/5';
export const LOANS = '/6';
export const DEPOSITS = '/7';

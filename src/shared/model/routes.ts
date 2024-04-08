import type { ComponentType } from 'react';

export const RouteName = {
    ACCOUNTS: '/accounts',
    MAIN_PAGE: '',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PERSONAL_PAGE: '/personal',
    SUCCESS_PAGE: '/success',
    NOTIFICATION_HISTORY_PAGE: '/notifications',
    RECOVERY_PASSWORD_PAGE: '/recovery'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}
export const MAIN = '';
export const CARDS = '/2';
export const ACCOUNTS = '/3';
export const TRANSFERS = '/4';
export const PAYMENTS = '/5';
export const LOANS = '/6';
export const DEPOSITS = '/7';

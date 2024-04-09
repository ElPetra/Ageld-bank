import type { ComponentType } from 'react';

export const RouteName = {
    ACCOUNT_PAGE: '/accounts',
    CARD_PAGE: '/cards',
    MAIN_PAGE: '',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PERSONAL_PAGE: '/personal',
    SUCCESS_PAGE: '/success',
    NOTIFICATION_HISTORY_PAGE: '/notifications_history',
    RECOVERY_PASSWORD_PAGE: '/recovery'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}
export const MAIN = '';
export const CARDS = 'cards';
export const ACCOUNTS = 'accounts';
export const TRANSFERS = 'transfers';
export const PAYMENTS = 'payments';
export const LOANS = 'loans';
export const DEPOSITS = 'deposits';

export const MainRouteName = [
    MAIN,
    CARDS,
    ACCOUNTS,
    TRANSFERS,
    PAYMENTS,
    LOANS,
    DEPOSITS
];

export const PERSONAL_DATA = '';
export const SAFETY = 'safety';
export const NOTIFICATIONS = 'notifications';

export const PersonalRouteName = [PERSONAL_DATA, SAFETY, NOTIFICATIONS];

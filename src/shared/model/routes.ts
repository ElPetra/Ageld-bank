import type { ComponentType } from 'react';

export const RouteName = {
    MAIN_PAGE: '',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    RECOVERY_PASSWORD_PAGE: '/recovery',
    PERSONAL_PAGE: '/personal',
    CARD_PAGE: '/card',
    DEPOSIT_PAGE: '/deposit-products',
    ACCOUNT_PAGE: '/account',
    CARD_PRODUCT_PAGE: '/card-product',
    NOTIFICATION_HISTORY_PAGE: '/notifications_history',
    ATMS_AND_BRANCHES: '/locate-us',
    CONTACTS_PAGE: '/contacts'
} as const;

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

export const CREATE = 'create';

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

export const OPENED = 'opened';
export const OPEN_REQUEST = 'open-request';
export const CLOSED = 'closed';
export const BLOCKED = 'blocked';

export const AccountsRouteName = [OPENED, OPEN_REQUEST, CLOSED, BLOCKED];

export const MY_CARDS = 'my-cards';
export const CARDS_PRODUCTS = 'cards-products';

export const CardsRouteName = [MY_CARDS, CARDS_PRODUCTS];
export const CardsGuestRouteName = [CARDS_PRODUCTS];

export const MY_DEPOSITS = 'my-deposits';
export const DEPOSITS_PRODUCTS = 'deposits-products';
export const DepositsGuestRouteName = [DEPOSITS_PRODUCTS];
export const DepositsRouteName = [MY_DEPOSITS, DEPOSITS_PRODUCTS];

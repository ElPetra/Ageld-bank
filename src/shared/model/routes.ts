import type { ComponentType } from 'react';

export const RouteName = {
    MAIN_PAGE: '',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    RECOVERY_PASSWORD_PAGE: '/recovery',
    PERSONAL_PAGE: '/personal',
    CARD_PAGE: '/card',
    CARD_PRODUCT_PAGE: '/card-product',
    ACCOUNT_PAGE: '/account',
    DEPOSIT_PAGE: '/deposit',
    DEPOSIT_PRODUCT_PAGE: '/deposit-product',
    NOTIFICATION_HISTORY_PAGE: '/notifications_history',
    ATMS_AND_BRANCHES: '/locate-us',
    CONTACTS_PAGE: '/contacts'
} as const;

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

export const CREATE = 'create';
export const EXTEND = 'extend';

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

export const ALL_ACCOUNTS = 'all';
export const DEBIT = 'debit';
export const DEPOSIT = 'deposit';
export const CREDIT = 'credit';

export const AccountsRouteName = [ALL_ACCOUNTS, DEBIT, DEPOSIT, CREDIT];

export const MY_CARDS = 'my-cards';
export const CARDS_PRODUCTS = 'cards-products';

export const CardsRouteName = [MY_CARDS, CARDS_PRODUCTS];
export const CardsGuestRouteName = [CARDS_PRODUCTS];

export const MY_CREDITS = 'my-credits';
export const CREDITS_PRODUCTS = 'credits-products';

export const CreditsRouteName = [MY_CREDITS, CREDITS_PRODUCTS];
export const CreditsGuestRouteName = [CREDITS_PRODUCTS];

export const MY_DEPOSITS = 'my-deposits';
export const DEPOSITS_PRODUCTS = 'deposits-products';
export const DepositsGuestRouteName = [DEPOSITS_PRODUCTS];
export const DepositsRouteName = [MY_DEPOSITS, DEPOSITS_PRODUCTS];

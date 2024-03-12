import type { ComponentType } from 'react';

export const RouteName = {
    MAIN_PAGE: '/',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PUBLIC_CONTRACT_PAGE: '/src/pages/public-contract/assets'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

import type { ComponentType } from 'react';

export const RouteName = {
    MAIN_PAGE: '/',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    SUCCESS_PAGE: '/success'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

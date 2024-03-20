import type { ComponentType } from 'react';

export const RouteName = {
    MAIN_PAGE: '/',
    REGISTRATION_PAGE: '/signup',
    LOGIN_PAGE: '/signin',
    PERSONAL_AREA_PAGE: '/personal',
    SUCCESS_PAGE: '/success',
    NOTIFICATION_PAGE: '/notifications'
};

export interface RouteDescription {
    path: string;
    component: ComponentType;
}

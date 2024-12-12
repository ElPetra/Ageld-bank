import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registrationReducer from 'src/pages/registration/model/registrationSlice';

import { userReducer } from 'src/entities/user/user-slice';
import {
    authApi,
    settingsApi,
    profileApi,
    registryApi,
    infoApi,
    accountApi,
    cardProductApi,
    cardApi,
    depositProductApi,
    depositApi
} from 'src/shared/api';

import { actionHandling } from './middleware';

const rootReducers = combineReducers({
    user: userReducer,
    registration: registrationReducer,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [registryApi.reducerPath]: registryApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [cardProductApi.reducerPath]: cardProductApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [depositProductApi.reducerPath]: depositProductApi.reducer,
    [depositApi.reducerPath]: depositApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            settingsApi.middleware,
            profileApi.middleware,
            registryApi.middleware,
            infoApi.middleware,
            cardProductApi.middleware,
            cardApi.middleware,
            accountApi.middleware,
            depositProductApi.middleware,
            depositApi.middleware,
            actionHandling
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

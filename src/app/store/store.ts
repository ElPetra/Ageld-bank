import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
    authApi,
    settingsApi,
    profileApi,
    registryApi,
    infoApi,
    authApi,
    cardProductApi
} from 'src/shared/api';

import userSlice from 'src/entities/user/user-slice';

import { actionHandling } from './middleware/actionHandling';

const rootReducers = combineReducers({
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [settingsApi.reducerPath]: settingsApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [registryApi.reducerPath]: registryApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [cardProductApi.reducerPath]: cardProductApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer
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
            accountApi.middleware,
            actionHandling
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

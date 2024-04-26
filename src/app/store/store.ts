import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { accountApi, cardApi, customerApi, infoApi } from 'src/shared/api';
import { authApi } from 'src/shared/api/auth';

import userSlice from 'src/entities/user/user-slice';

import { actionHandling } from './middleware/actionHandling';

const rootReducers = combineReducers({
    user: userSlice,
    [customerApi.reducerPath]: customerApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(
            customerApi.middleware,
            authApi.middleware,
            cardApi.middleware,
            infoApi.middleware,
            accountApi.middleware,
            actionHandling
        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { customerApi } from 'src/shared/api';

import userSlice from './slices/userSlice';

const rootReducers = combineReducers({
    user: userSlice,
    [customerApi.reducerPath]: customerApi.reducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(customerApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

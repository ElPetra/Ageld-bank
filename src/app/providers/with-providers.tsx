import { compose } from '@reduxjs/toolkit';

import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = compose<() => JSX.Element>(
    RouterProvider,
    StoreProvider
);

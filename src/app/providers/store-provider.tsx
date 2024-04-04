import { Provider } from 'react-redux';

import { store } from '../store/store';

import type { ReactNode } from 'react';

export const StoreProvider = (component: () => ReactNode) => () => (
    <Provider store={store}>{component()}</Provider>
);

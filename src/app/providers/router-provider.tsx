import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import type { ReactNode } from 'react';

export const RouterProvider = (component: () => ReactNode) => () => (
    <BrowserRouter>
        <Suspense fallback={'Loading'}>{component()}</Suspense>
    </BrowserRouter>
);

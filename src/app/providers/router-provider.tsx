import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProvider = (component: () => ReactNode) => () =>
    (
        <BrowserRouter>
            <Suspense fallback={'Loading'}>{component()}</Suspense>
        </BrowserRouter>
    );

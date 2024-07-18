import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { transformDepositProducts } from 'src/shared/lib';

import type { DepositProduct } from 'src/shared/model';

const depositBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/deposit/deposit_product';

export const depositProductApi = createApi({
    reducerPath: 'depositProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: depositBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    endpoints: builder => ({
        getDepositProducts: builder.query<DepositProduct[], void>({
            query: () => ({
                url: '/all_products',
                method: 'GET'
            }),
            transformResponse: transformDepositProducts
        })
    })
});

export const { useGetDepositProductsQuery } = depositProductApi;

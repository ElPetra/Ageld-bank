import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    transformDepositProductDetails,
    transformDepositProducts
} from 'src/shared/lib';

import type { DepositProductDetails, DepositProduct } from 'src/shared/model';

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
        }),
        getDepositProduct: builder.query<DepositProductDetails, { id: string }>(
            {
                query: ({ id }) => ({
                    url: `/${id}`,
                    method: 'GET'
                }),
                transformResponse: transformDepositProductDetails
            }
        )
    })
});

export const { useGetDepositProductsQuery, useGetDepositProductQuery } =
    depositProductApi;

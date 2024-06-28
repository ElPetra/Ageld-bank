import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CustomerDeposit } from 'src/shared/model';

import {
    transformCardProductDetails,
    transformDeposits
} from 'src/shared/lib';

import type {
    CardProduct,
    CardType
} from 'src/shared/model';

const depositBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/deposit/deposit_product';

export const depositsApi = createApi({
    reducerPath: 'depositsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: depositBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    endpoints: builder => ({
        getDepositProducts: builder.query<CustomerDeposit[],void>(
            {
                query: () => ({
                    url: '/all_products',
                 
                    method: 'GET'
                }),
                transformResponse: transformDeposits
            }
        ),
      
    })
});

export const {
    useGetDepositProductsQuery
} = depositsApi;

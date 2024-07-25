import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';
import { transformCustomerDeposit } from 'src/shared/lib';

import type { CustomerDeposit } from 'src/shared/model';

const depositBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/deposit/deposits';

export const depositApi = createApi({
    reducerPath: 'depositApi',
    baseQuery: fetchBaseQuery({
        baseUrl: depositBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        }
    }),
    endpoints: builder => ({
        getCustomerDeposits: builder.query<CustomerDeposit[], void>({
            query: () => ({
                url: '',
                method: 'GET'
            }),
            transformResponse: transformCustomerDeposit
        })
    })
});

export const { useGetCustomerDepositsQuery } = depositApi;

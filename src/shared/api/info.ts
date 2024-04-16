import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BankLocation } from '../model/bank-location';

export const infoApi = createApi({
    reducerPath: 'infoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8085/api/v1/info',
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Info'],
    endpoints: builder => ({
        getBankLocation: builder.query<void, BankLocation>({
            query: () => ({
                url: '/bank-info',
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const { useGetBankLocationQuery } = infoApi;

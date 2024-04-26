import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { INFO_URL } from './urls';

import type { BankLocation } from '../model/bank-location';

const baseUrl = import.meta.env.VITE_BASEURL_GATEWAY + INFO_URL;

export const infoApi = createApi({
    reducerPath: 'infoApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
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

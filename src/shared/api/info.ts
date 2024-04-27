import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BankInfo } from 'src/shared/model';

export const infoBaseUrl = import.meta.env.VITE_BASEURL_INFO + '/api/v1/info';

export const infoApi = createApi({
    reducerPath: 'infoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: infoBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Info'],
    endpoints: builder => ({
        getBankLocation: builder.query<void, BankInfo>({
            query: () => ({
                url: '/bank-info',
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const { useGetBankLocationQuery } = infoApi;

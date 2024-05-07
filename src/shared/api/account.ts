import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';

const accountBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/account';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: accountBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        createAccount: builder.mutation<
            string,
            { type: string, currencyName: string }
        >({
            query: ({ type, currencyName }) => ({
                url: '/new_account',
                method: 'POST',
                body: { type, currencyName }
            })
        })
    })
});

export const { useCreateAccountMutation } = accountApi;

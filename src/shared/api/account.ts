import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

import { type AccountCreationData } from 'src/widgets/account-creation/lib/useAccountCreationForm';

import { ACCOUNT_URL } from './urls';

const baseUrl = import.meta.env.VITE_BASEURL_GATEWAY + ACCOUNT_URL;

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: async headers => {
            const token = await getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        createAccount: builder.mutation<string, AccountCreationData>({
            query: reqBody => ({
                url: '/new_account',
                method: 'POST',
                body: reqBody
            })
        })
    })
});

export const { useCreateAccountMutation } = accountApi;

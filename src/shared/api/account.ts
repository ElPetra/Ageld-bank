import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { localStorageApi } from 'src/shared/api';
import {
    transformAccountDetails,
    transformAccounts,
    transformAccount
} from 'src/shared/lib/trasnform';

import type {
    Account,
    AccountDetails,
    AccountResponse
} from 'src/shared/model';

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
        }
    }),
    tagTypes: ['Account'],
    endpoints: builder => ({
        createAccount: builder.mutation<
            string,
            { type: string, currencyName: string }
        >({
            query: ({ type, currencyName }) => ({
                url: '/accounts',
                method: 'POST',
                body: { type, currencyName },
                responseHandler: response => response.text()
            }),
            invalidatesTags: ['Account']
        }),
        getAccounts: builder.query<Account[], { status: string, type: string }>(
            {
                query: ({ status, type }) => ({
                    url: `/accounts?status=${status}&type=${type}`,
                    method: 'GET'
                }),
                providesTags: ['Account'],
                transformResponse: (response: {
                    accounts: AccountResponse[]
                }) => {
                    if (
                        !response.accounts ||
                        !Array.isArray(response.accounts)
                    ) {
                        throw new TypeError(
                            'Expected `response.accounts` to be an array'
                        );
                    }
                    return transformAccounts(response.accounts);
                }
            }
        ),
        getAccountDetails: builder.query<AccountDetails, { number: string }>({
            query: ({ number }) => ({
                url: '/information/',
                params: {
                    account_number: number
                },
                method: 'GET'
            }),
            transformResponse: transformAccountDetails
        }),
        getAccount: builder.query<Account | undefined, void>({
            query: () => ({
                url: '/list_account_number',
                method: 'GET'
            }),
            providesTags: ['Account'],
            transformResponse: transformAccount
        })
    })
});

export const {
    useCreateAccountMutation,
    useGetAccountsQuery,
    useGetAccountDetailsQuery,
    useGetAccountQuery
} = accountApi;

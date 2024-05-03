import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const accountBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/account';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({
        baseUrl: accountBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        createAccount: builder.mutation<
            string,
            { type: string, currencyName: string, accessToken: string }
        >({
            query: ({ type, currencyName, accessToken }) => ({
                url: '/new_account',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: { type, currencyName }
            })
        })
    })
});

export const { useCreateAccountMutation } = accountApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { CustomerInfo } from 'src/shared/model';

const settingsBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/settings';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: settingsBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Settings'],
    endpoints: builder => ({
        addEmail: builder.mutation<
            void,
            { email: string, accessToken: string }
        >({
            query: ({ email, accessToken }) => ({
                url: '/add_email',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: { email }
            }),
            invalidatesTags: ['Settings']
        }),
        newEmail: builder.mutation<
            void,
            { email: string, accessToken: string }
        >({
            query: ({ email, accessToken }) => ({
                url: '/new_email',
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: { email }
            }),
            invalidatesTags: ['Settings']
        }),
        getInfo: builder.query<CustomerInfo, string>({
            query: accessToken => ({
                url: '/info',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                responseHandler: response => response.json()
            }),
            providesTags: ['Settings']
        })
    })
});

export const { useAddEmailMutation, useNewEmailMutation, useGetInfoQuery } =
    settingsApi;

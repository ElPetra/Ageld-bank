import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

import type { CustomerInfo } from 'src/shared/model';

const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: customerBaseUrl + '/settings',
        prepareHeaders: async headers => {
            const token = await getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Settings'],
    endpoints: builder => ({
        addEmail: builder.mutation<void, { email: string }>({
            query: ({ email }) => ({
                url: '/add_email',
                method: 'POST',
                body: { email }
            }),
            invalidatesTags: ['Settings']
        }),
        newEmail: builder.mutation<void, { email: string }>({
            query: ({ email }) => ({
                url: '/new_email',
                method: 'PATCH',
                body: { email }
            }),
            invalidatesTags: ['Settings']
        }),
        getInfo: builder.query<CustomerInfo, void>({
            query: () => ({
                url: '/info',
                method: 'GET',
                responseHandler: response => response.json()
            }),
            providesTags: ['Settings']
        })
    })
});

export const { useAddEmailMutation, useNewEmailMutation, useGetInfoQuery } =
    settingsApi;

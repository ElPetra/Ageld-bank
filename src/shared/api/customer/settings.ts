import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';

import type { CustomerInfo } from 'src/shared/model';

const settingsBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/settings';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: settingsBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        }
    }),
    tagTypes: ['Settings'],
    endpoints: builder => ({
        addEmail: builder.mutation<void, string>({
            query: email => ({
                url: '/add_email',
                method: 'POST',
                body: { email }
            }),
            invalidatesTags: ['Settings']
        }),
        newEmail: builder.mutation<void, string>({
            query: email => ({
                url: '/new_email',
                method: 'PATCH',
                body: { email },
                /* добавлено, т.к. бэк отвечает строкой вместо JSON */
                responseHandler: response => response.text()
            }),
            invalidatesTags: ['Settings']
        }),
        getInfo: builder.query<CustomerInfo, void>({
            query: () => ({
                url: '/info',
                method: 'GET'
            }),
            providesTags: ['Settings']
        })
    })
});

export const { useAddEmailMutation, useNewEmailMutation, useGetInfoQuery } =
    settingsApi;

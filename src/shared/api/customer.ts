import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

import type { CustomerInfo } from 'src/shared/model';

export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8082/api/v1/customer',
        prepareHeaders: async headers => {
            const token = await getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Customer'],
    endpoints: builder => ({
        changePassword: builder.mutation<
            string,
            { oldPassword: string, newPassword: string, Authorization: string }
        >({
            query: ({ oldPassword, newPassword, Authorization }) => ({
                url: '/profile/change_password',
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${Authorization}`
                },
                body: { oldPassword, newPassword }
            })
        }),
        refreshToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { refreshToken: string }
        >({
            query: ({ refreshToken }) => ({
                url: '/auth/refresh_token',
                method: 'POST',
                headers: {
                    Refresh: `Bearer ${refreshToken}`
                },
                responseHandler: response => response.json()
            })
        }),
        recoveryPassword: builder.mutation<
            void,
            { password: string, customerId: string }
        >({
            query: ({ password, customerId }) => ({
                url: '/registry/recovery_password',
                method: 'POST',
                body: { password, customerId }
            })
        }),
        checkStatus: builder.mutation<
            { statusType: string, message: string },
            string
        >({
            query: phoneNumber => ({
                url: '/registry/check_status',
                method: 'POST',
                body: { phoneNumber },
                responseHandler: response => response.json()
            })
        }),
        addEmail: builder.mutation<
            void,
            { Authorization: string, email: string }
        >({
            query: ({ Authorization, email }) => ({
                url: '/settings/add_email',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${Authorization}`
                },
                body: { email }
            })
        }),
        newEmail: builder.mutation<
            void,
            { Authorization: string, email: string }
        >({
            query: ({ Authorization, email }) => ({
                url: '/settings/new_email',
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${Authorization}`
                },
                body: { email }
            })
        }),
        getInfo: builder.query<CustomerInfo, { Authorization: string }>({
            query: ({ Authorization }) => ({
                url: '/settings/info',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${Authorization}`
                }
            })
        })
    })
});

export const {
    useChangePasswordMutation,
    useRefreshTokenMutation,
    useRecoveryPasswordMutation,
    useCheckStatusMutation,
    useAddEmailMutation,
    useNewEmailMutation,
    useGetInfoQuery
} = customerApi;

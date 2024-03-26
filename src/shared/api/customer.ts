import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CustomerInfo } from 'src/shared/model';

export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8082/api/v1/customer',
        prepareHeaders: headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ['Customer'],
    endpoints: builder => ({
        generateCode: builder.mutation<void, { phoneNumber: string }>({
            query: phoneNumber => ({
                url: '/auth/verification/generate_code',
                method: 'POST',
                body: { phoneNumber }
            })
        }),
        checkCode: builder.mutation<
            void,
            { phoneNumber: string, code: string }
        >({
            query: ({ code, phoneNumber }) => ({
                url: '/auth/verification/check_code',
                method: 'POST',
                body: { phoneNumber, code }
            })
        }),
        changePassword: builder.mutation<
            void,
            { oldPassword: string, newPassword: string, customerPhone: string }
        >({
            query: ({ oldPassword, newPassword, customerPhone }) => ({
                url: '/profile/change_password',
                method: 'PATCH',
                headers: {
                    'Customer-Phone': customerPhone
                },
                body: { oldPassword, newPassword }
            })
        }),
        refreshToken: builder.mutation<
            //refreshToken не допилен запрос
            { accessToken: string, refreshToken: string },
            { refreshToken: string }
        >({
            query: ({ refreshToken }) => ({
                url: '/auth/refresh_token',
                method: 'POST',
                body: { refreshToken }
            })
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phoneNumber: string, password: string }
        >({
            query: ({ phoneNumber, password }) => ({
                url: '/auth/generate_token',
                method: 'POST',
                body: { phoneNumber, password }
            })
        }),
        recoveryPassword: builder.mutation<
            void,
            { password: string, customerId: string }
        >({
            query: ({ password, customerId }) => ({
                url: '/auth/recovery_password',
                method: 'POST',
                body: { password, customerId }
            })
        }),
        createAccount: builder.mutation<
            void,
            { uuid: string, password: string }
        >({
            query: ({ uuid, password }) => ({
                url: '/auth/create_account',
                method: 'POST',
                body: { uuid, password }
            })
        }),
        checkStatus: builder.mutation<
            { statusType: string, message: string },
            string
        >({
            query: phoneNumber => ({
                url: '/auth/check_status',
                method: 'POST',
                body: { phoneNumber }
            })
        }),
        checkRegistration: builder.mutation<{ customerId: string }, string>({
            query: phoneNumber => ({
                url: '/auth/check_registration',
                method: 'POST',
                body: { phoneNumber }
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
    useGenerateCodeMutation,
    useCheckCodeMutation,
    useChangePasswordMutation,
    useRefreshTokenMutation,
    useGenerateTokenMutation,
    useRecoveryPasswordMutation,
    useCreateAccountMutation,
    useCheckStatusMutation,
    useCheckRegistrationMutation,
    useAddEmailMutation,
    useNewEmailMutation,
    useGetInfoQuery
} = customerApi;

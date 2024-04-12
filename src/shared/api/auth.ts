import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8082/api/v1/customer',
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        checkRegistration: builder.mutation<{ customerId: string }, string>({
            query: phoneNumber => ({
                url: '/registry/check_registration',
                method: 'POST',
                body: { phoneNumber },
                responseHandler: response => response.json()
            })
        }),
        createAccount: builder.mutation<
            void,
            { customerId: string, password: string }
        >({
            query: ({ customerId, password }) => ({
                url: '/registry/create_user_profile',
                method: 'POST',
                body: { customerId, password }
            })
        }),
        checkCode: builder.mutation<
            string,
            { phoneNumber: string, code: string }
        >({
            query: ({ code, phoneNumber }) => ({
                url: '/auth/verification/check_code',
                method: 'POST',
                body: { phoneNumber, code }
            })
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phoneNumber: string, password: string }
        >({
            query: ({ phoneNumber, password }) => ({
                url: '/auth/generate_token',
                method: 'POST',
                body: { phoneNumber, password },
                responseHandler: response => response.json()
            })
        }),
        generateCode: builder.mutation<string, { phoneNumber: string }>({
            query: phoneNumber => ({
                url: '/auth/verification/generate_code',
                method: 'POST',
                body: { phoneNumber }
            })
        })
    })
});

export const {
    useGenerateTokenMutation,
    useGenerateCodeMutation,
    useCheckCodeMutation,
    useCheckRegistrationMutation,
    useCreateAccountMutation
} = authApi;

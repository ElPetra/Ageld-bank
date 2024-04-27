import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { customerBaseUrl } from 'src/shared/model';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: customerBaseUrl + '/auth',
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        generateCode: builder.mutation<string, { phoneNumber: string }>({
            query: phoneNumber => ({
                url: '/verification/generate_code',
                method: 'POST',
                body: { phoneNumber }
            })
        }),
        checkCode: builder.mutation<
            string,
            { phoneNumber: string, code: string }
        >({
            query: ({ code, phoneNumber }) => ({
                url: '/verification/check_code',
                method: 'POST',
                body: { phoneNumber, code }
            })
        }),
        checkRegistration: builder.mutation<void, string>({
            query: phoneNumber => ({
                url: '/check_registration',
                method: 'POST',
                body: { phoneNumber },
                responseHandler: response => response.json()
            })
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phoneNumber: string, password: string }
        >({
            query: ({ phoneNumber, password }) => ({
                url: '/generate_token',
                method: 'POST',
                body: { phoneNumber, password },
                responseHandler: response => response.json()
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
        })
    })
});

export const {
    useGenerateTokenMutation,
    useGenerateCodeMutation,
    useCheckCodeMutation,
    useCheckRegistrationMutation,
    useRefreshTokenMutation
} = authApi;

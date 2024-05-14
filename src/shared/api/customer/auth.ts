import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/auth';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: authBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ['Auth'],
    endpoints: builder => ({
        generateCode: builder.mutation<string, string>({
            query: phone => ({
                url: '/verification/generate_code',
                method: 'POST',
                body: { phoneNumber: phone },
                responseHandler: response => response.text()
            })
        }),
        checkCode: builder.mutation<string, { phone: string, code: string }>({
            query: ({ phone, code }) => ({
                url: '/verification/check_code',
                method: 'POST',
                body: { phoneNumber: phone, code },
                responseHandler: response => response.text()
            })
        }),
        checkRegistration: builder.mutation<void, string>({
            query: phone => ({
                url: '/check_registration',
                method: 'POST',
                body: { phoneNumber: phone }
            })
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phone: string, password: string }
        >({
            query: ({ phone, password }) => ({
                url: '/generate_token',
                method: 'POST',
                body: { phoneNumber: phone, password }
            })
        }),
        refreshToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { refreshToken: string }
        >({
            query: ({ refreshToken }) => ({
                url: '/refresh_token',
                method: 'POST',
                headers: {
                    Refresh: `Bearer ${refreshToken}`
                }
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

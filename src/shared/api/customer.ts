import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://a-geld.ru/api/v1/customer/auth'
    }),
    tagTypes: ['Customer'],
    endpoints: builder => ({
        get: builder.query({
            query: () => '/',
            providesTags: ['Customer']
        }),
        checkRegistration: builder.mutation<{ uuid: string }, string>({
            query: phoneNumber => ({
                url: '/check_registration',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { phone_number: phoneNumber }
            })
        }),
        checkStatus: builder.mutation<{ statusType: string }, string>({
            query: phoneNumber => ({
                url: '/check_status',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { phone_number: phoneNumber }
            }),
            transformResponse: (data: {
                status_type: string
            }): { statusType: string } => {
                return { statusType: data.status_type };
            }
        }),
        generateCode: builder.mutation<{ customerId: string }, string>({
            query: phoneNumber => ({
                url: '/verification/generate_code',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { phone_number: phoneNumber }
            }),
            transformResponse: (data: {
                customer_id: string
            }): { customerId: string } => {
                return { customerId: data.customer_id };
            }
        }),
        checkCode: builder.mutation<
            { status: string, phoneNumber: string },
            { code: string, phoneNumber: string }
        >({
            query: ({ code, phoneNumber }) => ({
                url: '/verification/check_code',
                method: 'POST',
                body: { code: code, phoneNumber: phoneNumber }
            })
        }),
        createAccount: builder.mutation<
            void,
            { customerId: string, password: string }
        >({
            query: ({ customerId, password }) => ({
                url: '/create_account',
                method: 'POST',
                body: { customer_id: customerId, password: password }
            }),
            invalidatesTags: ['Customer']
        }),
        password: builder.mutation<
            void,
            { phoneNumber: string, password: string }
        >({
            query: ({ phoneNumber, password }) => ({
                url: '/password',
                method: 'POST',
                body: { phone_number: phoneNumber, password: password }
            }),
            invalidatesTags: ['Customer']
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phoneNumber: string }
        >({
            query: ({ phoneNumber }) => ({
                url: '/generate_token',
                method: 'POST',
                body: { phone_number: phoneNumber }
            }),
            transformResponse: (data: {
                access_token: string,
                refresh_token: string
            }): { accessToken: string, refreshToken: string } => {
                return {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token
                };
            },
            invalidatesTags: ['Customer']
        })
    })
});

export const {} = customerApi;

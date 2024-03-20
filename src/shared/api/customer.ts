import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8082/api/v1/customer'
    }),
    tagTypes: ['Customer'],
    endpoints: builder => ({
        get: builder.query({
            query: () => '/',
            providesTags: ['Customer']
        }),
        checkRegistration: builder.mutation<
            { customerId: string },
            { phoneNumber: string }
        >({
            query: phoneNumber => ({
                url: '/auth/check_registration',
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
        checkStatus: builder.mutation<
            { statusType: string, message: string },
            { phoneNumber: string }
        >({
            query: phoneNumber => ({
                url: '/auth/check_status',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { phone_number: phoneNumber }
            }),
            transformResponse: (data: {
                status_type: string,
                message: string
            }): { statusType: string, message: string } => {
                return { statusType: data.status_type, message: data.message };
            }
        }),
        generateCode: builder.mutation<
            { customerId: string },
            { phoneNumber: string }
        >({
            query: phoneNumber => ({
                url: '/auth/verification/generate_code',
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
                url: '/auth/verification/check_code',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { code: code, phoneNumber: phoneNumber }
            }),
            transformResponse: (data: {
                status: string,
                phone_number: string
            }): { status: string, phoneNumber: string } => {
                return {
                    status: data.status,
                    phoneNumber: data.phone_number
                };
            }
        }),
        createAccount: builder.mutation<
            { status: string },
            { customerId: string, password: string }
        >({
            query: ({ customerId, password }) => ({
                url: '/auth/create_account',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { customer_id: customerId, password: password }
            })
        }),
        generateToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { phoneNumber: string, password: string }
        >({
            query: ({ phoneNumber, password }) => ({
                url: '/auth/generate_token',
                method: 'POST',
                body: { phone_number: phoneNumber, password }
            }),
            transformResponse: (data: {
                access_token: string,
                refresh_token: string
            }): { accessToken: string, refreshToken: string } => {
                return {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token
                };
            }
        }),
        //refreshToken не допилен запрос
        refreshToken: builder.mutation<
            { accessToken: string, refreshToken: string },
            { refreshToken: string }
        >({
            query: ({ refreshToken }) => ({
                url: '/auth/refresh_token',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { refresh_token: refreshToken }
            }),
            transformResponse: (data: {
                access_token: string,
                refresh_token: string
            }): { accessToken: string, refreshToken: string } => {
                return {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token
                };
            }
        }),
        //нужно переделать на запрос без мутации
        getCustomerInfo: builder.mutation<
            {
                firstName: string,
                lastName: string,
                middleName: string,
                phoneNumber: string,
                email: string,
                birthDate: string,
                childCount: string,
                registrationDateBank: string
            },
            { Authorization: string }
        >({
            query: ({ Authorization }) => ({
                url: '/settings/info',
                method: 'GET',
                headers: {
                    ContentType: 'application/json',
                    Authorization: Authorization
                }
            }),
            transformResponse: (data: {
                first_name: string,
                last_name: string,
                middle_name: string,
                phone_number: string,
                email: string,
                birth_date: string,
                child_count: string,
                registration_date_bank: string
            }): {
                firstName: string,
                lastName: string,
                middleName: string,
                phoneNumber: string,
                email: string,
                birthDate: string,
                childCount: string,
                registrationDateBank: string
            } => {
                return {
                    firstName: data.first_name,
                    lastName: data.last_name,
                    middleName: data.middle_name,
                    phoneNumber: data.phone_number,
                    email: data.email,
                    birthDate: data.birth_date,
                    childCount: data.child_count,
                    registrationDateBank: data.registration_date_bank
                };
            }
        }),
        addEmail: builder.mutation<
            { status: string, message: string },
            { Authorization: string, email: string }
        >({
            query: ({ Authorization, email }) => ({
                url: '/settings/add_email',
                method: 'POST',
                headers: {
                    ContentType: 'application/json',
                    Authorization: Authorization
                },
                body: { email: email }
            })
        }),
        changeEmail: builder.mutation<
            { status: string, message: string },
            { Authorization: string, email: string }
        >({
            query: ({ Authorization, email }) => ({
                url: '/settings/new_email',
                method: 'PATCH',
                headers: {
                    ContentType: 'application/json',
                    Authorization: Authorization
                },
                body: { email: email }
            })
        }),
        changePassword: builder.mutation<
            { message: string },
            { accessToken: string, password: string, newPassword: string }
        >({
            query: ({ accessToken, password, newPassword }) => ({
                url: '/profile/change_password',
                method: 'PATCH',
                headers: {
                    ContentType: 'application/json',
                    access_token: accessToken
                },
                body: { password: password, new_password: newPassword }
            })
        }),
        recoveryPassword: builder.mutation<
            { status: string },
            { password: string, customerId: string }
        >({
            query: ({ password, customerId }) => ({
                url: '/auth/recovery_password',
                method: 'POST',
                headers: {
                    ContentType: 'application/json'
                },
                body: { password: password, customer_id: customerId }
            })
        })
    })
});

export const { useGenerateTokenMutation } = customerApi;

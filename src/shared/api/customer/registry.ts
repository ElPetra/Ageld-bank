import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export const registryApi = createApi({
    reducerPath: 'registryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: customerBaseUrl + '/registry',
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Registry'],
    endpoints: builder => ({
        checkMissRegistration: builder.mutation<{ customerId: string }, string>(
            {
                query: phoneNumber => ({
                    url: '/check_miss_registration',
                    method: 'POST',
                    body: { phoneNumber },
                    responseHandler: response => response.json()
                })
            }
        ),
        createProfile: builder.mutation<
            void,
            { customerId: string, password: string }
        >({
            query: ({ customerId, password }) => ({
                url: '/create_user_profile',
                method: 'POST',
                body: { customerId, password }
            })
        }),
        checkStatus: builder.mutation<
            { statusType: string, message: string },
            string
        >({
            query: phoneNumber => ({
                url: '/check_status',
                method: 'POST',
                body: { phoneNumber },
                responseHandler: response => response.json()
            })
        }),
        recoveryPassword: builder.mutation<
            void,
            { password: string, customerId: string }
        >({
            query: ({ password, customerId }) => ({
                url: '/recovery_password',
                method: 'POST',
                body: { password, customerId }
            })
        })
    })
});

export const {
    useCreateProfileMutation,
    useCheckMissRegistrationMutation,
    useCheckStatusMutation,
    useRecoveryPasswordMutation
} = registryApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { RegistrationState } from 'src/pages/registration/model/registrationSlice';

const registryBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/customers';

export const registryApi = createApi({
    reducerPath: 'registryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: registryBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    // Старая регистрация не удалял, оставил для совместимости
    tagTypes: ['Registry'],
    endpoints: builder => ({
        checkMissRegistration: builder.mutation<{ customerId: string }, string>(
            {
                query: phoneNumber => ({
                    url: '/check_miss_registration',
                    method: 'POST',
                    body: { phoneNumber }
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
                body: { phoneNumber }
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
        }),
        createNewClient: builder.mutation<void, RegistrationState>({
            query: registrationData => ({
                url: '/new_client',
                method: 'POST',
                body: registrationData
            })
        })
    })
});

export const {
    useCreateProfileMutation,
    useCheckMissRegistrationMutation,
    useCheckStatusMutation,
    useRecoveryPasswordMutation,
    useCreateNewClientMutation
} = registryApi;

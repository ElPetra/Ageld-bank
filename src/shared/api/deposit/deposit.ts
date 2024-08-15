import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';
import { transformDepositDetails, transformDeposit } from 'src/shared/lib';

import type { DepositDetails, Deposit } from 'src/shared/model';

const depositBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/deposit';

export const depositApi = createApi({
    reducerPath: 'depositApi',
    baseQuery: fetchBaseQuery({
        baseUrl: depositBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        }
    }),
    tagTypes: ['Deposit'],
    endpoints: builder => ({
        getDeposits: builder.query<Deposit[], void>({
            query: () => ({
                url: '/deposits',
                method: 'GET'
            }),
            transformResponse: transformDeposit,
            providesTags: ['Deposit']
        }),
        getDepositDetails: builder.query<DepositDetails, { id: string }>({
            query: ({ id }) => ({
                url: '/info',
                params: {
                    deposit_id: id
                },
                method: 'GET'
            }),
            transformResponse: transformDepositDetails,
            providesTags: ['Deposit']
        }),
        prolongDeposit: builder.mutation<
            string,
            { depositId: string, renewalTermsDays: number }
        >({
            query: ({ depositId, renewalTermsDays }) => ({
                url: '/deposits/prolongConditions',
                method: 'POST',
                body: { depositId, renewalTermsDays }
            }),
            invalidatesTags: ['Deposit']
        }),
        autoRenewalDeposit: builder.mutation<
            string,
            { depositId: string, isAutoProlongation: boolean }
        >({
            query: ({ depositId, isAutoProlongation }) => ({
                url: `/deposits/${depositId}/autoRenewal`,
                method: 'PATCH',
                body: { autorenewal: isAutoProlongation }
            }),
            invalidatesTags: ['Deposit']
        }),
        createDeposit: builder.mutation<
            void,
            {
                productId: string,
                percentRate: string,
                timeDays: number,
                accountId: string
            }
        >({
            query: ({ productId, percentRate, timeDays, accountId }) => ({
                url: '/deposits',
                method: 'POST',
                body: { productId, percentRate, timeDays, accountId }
            }),
            invalidatesTags: ['Deposit']
        })
    })
});

export const {
    useGetDepositsQuery,
    useGetDepositDetailsQuery,
    useProlongDepositMutation,
    useAutoRenewalDepositMutation,
    useCreateDepositMutation
} = depositApi;

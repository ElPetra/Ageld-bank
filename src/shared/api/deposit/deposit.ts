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
    endpoints: builder => ({
        getDeposits: builder.query<Deposit[], void>({
            query: () => ({
                url: '/deposits',
                method: 'GET'
            }),
            transformResponse: transformDeposit
        }),
        getDepositDetails: builder.query<DepositDetails, { id: string }>({
            query: ({ id }) => ({
                url: '/info',
                params: {
                    deposit_id: id
                },
                method: 'GET'
            }),
            transformResponse: transformDepositDetails
        })
    })
});

export const { useGetDepositsQuery, useGetDepositDetailsQuery } = depositApi;

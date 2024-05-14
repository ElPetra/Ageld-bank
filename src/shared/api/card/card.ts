import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';
import { transformCards } from 'src/shared/lib';

import type { CustomersCard } from 'src/shared/model';

const cardBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/card';

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: cardBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        }
    }),
    endpoints: builder => ({
        getCustomerCardsByType: builder.query<
            CustomersCard[],
            { type: string }
        >({
            query: ({ type }) => ({
                url: `/cards`,
                params: {
                    type_card: type
                },
                method: 'GET'
            }),
            transformResponse: transformCards
        }),
        getCustomerCards: builder.query<CustomersCard[], void>({
            query: () => ({
                url: `/cards`,
                method: 'GET'
            }),
            transformResponse: transformCards
        }),
        getCustomerCardDetails: builder.query<CustomersCard, { id: string }>({
            query: ({ id }) => ({
                url: `/cards/info`,
                params: {
                    cards: id
                },
                method: 'GET'
            })
        })
    })
});

export const {
    useGetCustomerCardsByTypeQuery,
    useGetCustomerCardsQuery,
    useGetCustomerCardDetailsQuery
} = cardApi;

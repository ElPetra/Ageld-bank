import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';
import { transformCardDetails, transformCards } from 'src/shared/lib';

import type { CardDetails, CardType, CustomerCard } from 'src/shared/model';

const cardBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/cards';

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
            CustomerCard[],
            { type: CardType }
        >({
            query: ({ type }) => ({
                url: '/cards',
                params: {
                    type_card: type
                },
                method: 'GET'
            }),
            transformResponse: transformCards
        }),
        getCustomerCards: builder.query<CustomerCard[], void>({
            query: () => ({
                url: '/cards',
                method: 'GET'
            }),
            transformResponse: transformCards
        }),
        getCustomerCardDetails: builder.query<CardDetails, { id: string }>({
            query: ({ id }) => ({
                url: id,
                method: 'GET'
            }),
            transformResponse: transformCardDetails
        })
    })
});

export const {
    useGetCustomerCardsByTypeQuery,
    useGetCustomerCardsQuery,
    useGetCustomerCardDetailsQuery
} = cardApi;

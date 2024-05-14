import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from '../local-storage';

import type { CustomersCard } from 'src/shared/model';

const cardBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/card';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: cardBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
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
                method: 'GET',
                responseHandler: response => response.json()
            })
        }),
        getCustomerCards: builder.query<CustomersCard[], void>({
            query: () => ({
                url: `/cards`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const { useGetCustomerCardsByTypeQuery, useGetCustomerCardsQuery } =
    cardsApi;

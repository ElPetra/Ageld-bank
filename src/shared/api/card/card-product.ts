import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
    transformCardProductDetails,
    transformCardProducts
} from 'src/shared/lib';

import type {
    CardProduct,
    CardProductDetails,
    CardType
} from 'src/shared/model';

const cardBaseUrl = import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/cards';

export const cardProductApi = createApi({
    reducerPath: 'cardProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: cardBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    endpoints: builder => ({
        getCardProductsByType: builder.query<CardProduct[], { type: CardType }>(
            {
                query: ({ type }) => ({
                    url: '/products',
                    params: {
                        cardTypes: type
                    },
                    method: 'GET'
                }),
                transformResponse: transformCardProducts
            }
        ),
        getCardProductDetails: builder.query<
            CardProductDetails,
            { id: string }
        >({
            query: ({ id }) => ({
                url: `/products${id}`,
                method: 'GET'
            }),
            transformResponse: transformCardProductDetails
        })
    })
});

export const { useGetCardProductsByTypeQuery, useGetCardProductDetailsQuery } =
    cardProductApi;

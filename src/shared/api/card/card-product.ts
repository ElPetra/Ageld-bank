import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { cardBaseUrl } from 'src/shared/model';

import type { CardProduct, CardProductInfo } from 'src/shared/model';

export const cardProductApi = createApi({
    reducerPath: 'cardProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: cardBaseUrl + '/card-product',
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        getCardProducts: builder.query<CardProduct[], { type: string }>({
            query: ({ type }) => ({
                url: `/list_card_products?card_product_type=${type}`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        }),
        getCardProductInfo: builder.query<CardProductInfo, { id: string }>({
            query: ({ id }) => ({
                url: `/full_info_card/?card_product_id=${id}`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const { useGetCardProductsQuery, useGetCardProductInfoQuery } =
    cardProductApi;

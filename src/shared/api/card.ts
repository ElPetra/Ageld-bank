import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

import { CARD_URL } from './urls';

import type { Card, CardInfo } from 'src/widgets/cards/model';

const baseUrl = import.meta.env.VITE_BASEURL_GATEWAY + CARD_URL;

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: async headers => {
            const token = await getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        getCardProducts: builder.query<Card[], { type: string }>({
            query: ({ type }) => ({
                url: `/card-product/list_card_products?card_product_type=${type}`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        }),
        getCardProductInfo: builder.query<CardInfo, { id: string }>({
            query: ({ id }) => ({
                url: `/card-product/full_info_card/?card_product_id=${id}`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const { useGetCardProductsQuery, useGetCardProductInfoQuery } = cardApi;

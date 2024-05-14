import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
    CardProduct,
    CardProductDetails,
    CardType
} from 'src/shared/model';
import {
    transformCardProductDetails,
    transformCardProducts
} from 'src/shared/lib';

const cardBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/card/card-product';

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
                    url: `/list_card_products`,
                    params: {
                        card_product_type: type
                    },
                    method: 'GET'
                }),
                transformResponse: transformCardProducts
            }
        ),
        getCardProducts: builder.query<CardProduct[], void>({
            query: () => ({
                url: `/list_card_products`,
                method: 'GET'
            }),
            transformResponse: transformCardProducts
        }),
        getCardProductDetails: builder.query<
            CardProductDetails,
            { id: string }
        >({
            query: ({ id }) => ({
                url: `/full_info_card/`,
                params: {
                    card_product_id: id
                },
                method: 'GET'
            }),
            transformResponse: transformCardProductDetails
        })
    })
});

export const {
    useGetCardProductsByTypeQuery,
    useGetCardProductsQuery,
    useGetCardProductDetailsQuery
} = cardProductApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { CardProduct, CardProductInfo } from 'src/shared/model';

const cardBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/card/card-product';

export const cardProductApi = createApi({
    reducerPath: 'cardProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: cardBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    endpoints: builder => ({
        getCardProductsByType: builder.query<CardProduct[], { type: string }>({
            query: ({ type }) => ({
                url: `/list_card_products`,
                params: {
                    card_product_type: type
                },
                method: 'GET',
                responseHandler: response => response.json()
            })
        }),
        getCardProducts: builder.query<CardProduct[], void>({
            query: () => ({
                url: `/list_card_products`,
                method: 'GET',
                responseHandler: response => response.json()
            })
        }),
        getCardProductInfo: builder.query<CardProductInfo, { id: string }>({
            query: ({ id }) => ({
                url: `/full_info_card/`,
                params: {
                    card_product_id: id
                },
                method: 'GET',
                responseHandler: response => response.json()
            })
        })
    })
});

export const {
    useGetCardProductsByTypeQuery,
    useGetCardProductsQuery,
    useGetCardProductInfoQuery
} = cardProductApi;

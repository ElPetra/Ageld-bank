import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

import type { Card } from 'src/widgets/cards/model';

export const cardApi = createApi({
    reducerPath: 'cardApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://172.17.1.76:8082/api/v1/card',
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
        })
    })
});

export const { useGetCardProductsQuery } = cardApi;

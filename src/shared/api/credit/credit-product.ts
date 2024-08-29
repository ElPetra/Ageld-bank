// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // import {
// //     // transformCreditProducts

// //     // transformDepositProducts
// // } from 'src/shared/lib';

// // import type { DepositProductDetails, DepositProduct } from 'src/shared/model';

// const creditBaseUrl =
//     import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/credit/credit_product';

// export const creditProductApi = createApi({
//     reducerPath: 'creditProductApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: creditBaseUrl,
//         prepareHeaders: async headers => {
//             headers.set('content-type', 'application/json');
//             return headers;
//         }
//     }),
//     endpoints: builder => ({
//         getCreditProducts: builder.query({
//             query: () => ({
//                 url: '/all_credits',
//                 method: 'GET'
//             })
//             // transformResponse: transformDepositProducts
//             // transformResponse: transformCreditProducts
//         })
//     })
// });

// export const { useGetCreditProductsQuery } = creditProductApi;

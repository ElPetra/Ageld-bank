import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { localStorageApi } from 'src/shared/api';

const profileBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/customers';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: profileBaseUrl,
        prepareHeaders: async headers => {
            const token = await localStorageApi.getActualAccessToken();
            headers.set('content-type', 'application/json');
            headers.set('Authorization', 'Bearer ' + token);
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Profile'],
    endpoints: builder => ({
        changePassword: builder.mutation<
            string,
            { oldPassword: string, newPassword: string }
        >({
            query: ({ oldPassword, newPassword }) => ({
                url: '/password',
                method: 'PATCH',
                body: { oldPassword, newPassword }
            })
        })
    })
});

export const { useChangePasswordMutation } = profileApi;

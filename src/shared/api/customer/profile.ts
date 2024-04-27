import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getActualAccessToken } from 'src/shared/lib';

const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: customerBaseUrl + '/profile',
        prepareHeaders: async headers => {
            const token = await getActualAccessToken();
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
                url: '/change_password',
                method: 'PATCH',
                body: { oldPassword, newPassword }
            })
        })
    })
});

export const { useChangePasswordMutation } = profileApi;

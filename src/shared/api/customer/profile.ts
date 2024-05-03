import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const profileBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer/profile';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: profileBaseUrl,
        prepareHeaders: async headers => {
            headers.set('content-type', 'application/json');
            return headers;
        },
        responseHandler: response => response.text()
    }),
    tagTypes: ['Profile'],
    endpoints: builder => ({
        changePassword: builder.mutation<
            string,
            { oldPassword: string, newPassword: string, accessToken: string }
        >({
            query: ({ oldPassword, newPassword, accessToken }) => ({
                url: '/change_password',
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                body: { oldPassword, newPassword }
            })
        })
    })
});

export const { useChangePasswordMutation } = profileApi;

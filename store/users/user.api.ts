import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "",
        }),
    }),
});

export const { useGetUsersQuery } = api;

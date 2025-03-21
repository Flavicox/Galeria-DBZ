import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";

export const dbzApi = createApi({
    reducerPath: "dbzApi",
    baseQuery: retry(fetchBaseQuery({baseUrl: "https://dragonball-api.com/api"}), {
        maxRetries: 3,
    }),
    keepUnusedDataFor: 60,

    refetchOnFocus: true,
    refetchOnMountOrArgChange: 10,
    refetchOnReconnect: true,

    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: (filter) => `/characters${filter}`,
        }),

        getCharactersById: builder.query({
            query: (id) => "/characters/" + id,
        })
    })
});

export const {useLazyGetCharactersQuery, useGetCharactersByIdQuery} = dbzApi;
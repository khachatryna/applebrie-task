import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: ({id}) => id ? `posts/${id}` : "posts",
        }),
    }),
})

export const {  useLazyGetPostsQuery } = postAPI
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseQuery = fetchBaseQuery({
    baseUrl: "https://assignment-5-server-ruddy.vercel.app/api/v1"
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes:["product"],
    endpoints: () => ({})
})
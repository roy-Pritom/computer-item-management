import { baseApi } from "../../api/baseApi";

export const authApi=baseApi.injectEndpoints({
    endpoints: (builder) => ({
        users:builder.query({
            query:()=>({
                url:"/user",
                method:"Get",
            }),
            providesTags:['product']
        }),
        login: builder.mutation({
            query: (userData) => ({
                url: '/auth/login',
                method: "POST",
                body: userData
            }),
            invalidatesTags:['product']
        }),
        register:builder.mutation({
            query:(data)=>({
                url:"/user/register",
                method:"POST",
                body:data
            }),
           invalidatesTags:['product']
        }),
     
    })
})

export const {useLoginMutation,useRegisterMutation,useUsersQuery}=authApi;
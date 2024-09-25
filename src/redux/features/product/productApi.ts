import { baseApi } from "../../api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allProduct: builder.query({
            query: (queryParams) => {
                const queryStr=new URLSearchParams(queryParams).toString();
                // console.log(queryStr);
                return {
                    url: `/product?${queryStr}`,
                    method: "GET",
                }

            },
            providesTags:['product']
        }),
        getSingleProduct: builder.query({
            query: (productId) => {
                return {
                    url: `/product/${productId}`,
                    method: "GET",
                }

            },
            providesTags:['product'],
        }),
        addProduct: builder.mutation({
            query: (productData) => {
                return {
                    url: '/product',
                    method: "POST",
                    body:productData
                }

            },
            invalidatesTags:['product'],
        }),
        removeProduct: builder.mutation({
            query: (productId) => {
                return {
                    url: `/product/${productId}`,
                    method: "DELETE"
                }

            },
            invalidatesTags:['product'],
        }),
        removeProducts: builder.mutation({
            query: (productIds) => {
                return {
                    url: '/product/delete-products',
                    method: "POST",
                    body:productIds
                }

            },
            invalidatesTags:['product'],
        }),
        updateProduct: builder.mutation({
            query: (options) => {
                console.log(options.data);
                return {
                    url: `/product/${options.productId}`,
                    method: "PUT",
                    body:options.data
                }

            },
            invalidatesTags:['product'],
        }),
     
    })
})

export const { useAllProductQuery,useAddProductMutation,useRemoveProductMutation,useUpdateProductMutation,useGetSingleProductQuery,useRemoveProductsMutation} = productApi;
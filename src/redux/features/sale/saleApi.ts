import { baseApi } from "../../api/baseApi";

export const saleApi=baseApi.injectEndpoints({
  endpoints:(builder)=>({
    getAllSale: builder.query({
        query: (queryParams) => {
           console.log(queryParams);
            return {
                url: `/sale?history=${queryParams}`,
                method: "GET"
            }

        },
        providesTags:['product']
    }),
    createSale: builder.mutation({
        query: (saleData) => {
           
            return {
                url: '/sale',
                method: "POST",
                body:saleData
            }

        },
        invalidatesTags:['product']
    }),
  })
})

export const {useCreateSaleMutation,useGetAllSaleQuery}=saleApi;
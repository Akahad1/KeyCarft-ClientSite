import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/l2/a4" }),

  endpoints: (builder) => ({
    getCartData: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
    }),

    getSpecificCartDara: builder.query({
      query: (id) => ({
        url: `/cart/${id}`,

        method: "GET",
      }),
    }),

    addCartData: builder.mutation({
      query: (data) => {
        console.log("ServerData", data);
        return {
          url: `cart/create-cartData`,
          method: "POST",
          body: data,
        };
      },
    }),
    UpdateCartData: builder.mutation({
      query: (data) => {
        console.log("ServerData", data);
        return {
          url: `/cart/${data.id}`,
          method: "PATCH",
          body: data.updateCart,
        };
      },
    }),
    addProductData: builder.mutation({
      query: (data) => {
        console.log("ServerData", data);
        return {
          url: `/product/create-products`,
          method: "POST",
          body: data,
        };
      },
    }),
    UpdateProductData: builder.mutation({
      query: (data) => {
        console.log("ServerData", data);
        return {
          url: `/product/${data.id}`,
          method: "PATCH",
          body: data.updateProduct,
        };
      },
    }),
    DeleteProductData: builder.mutation({
      query: (id) => {
        console.log("id", id);
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
    }),
    DeleteCartData: builder.mutation({
      query: (id) => {
        console.log("id", id);
        return {
          url: `/cart/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetProductQuery,
  useAddCartDataMutation,
  useGetSpecificCartDaraQuery,
  useGetCartDataQuery,
  useUpdateProductDataMutation,
  useDeleteProductDataMutation,
  useAddProductDataMutation,
  useDeleteCartDataMutation,
  useUpdateCartDataMutation,
} = baseApi;

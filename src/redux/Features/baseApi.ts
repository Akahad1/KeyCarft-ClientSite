import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TcartApiResponse } from "../../pages/Cart";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://key-craft-server-site.vercel.app/l2/a4",
  }),
  tagTypes: ["cart", "poduct"],
  endpoints: (builder) => ({
    getCartData: builder.query<TcartApiResponse, void>({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    getProduct: builder.query({
      query: (query) => {
        console.log("qurey", query);

        return {
          url: `/product?searchTerm=${query}&sort=${query.sort}`,
          method: "GET",
        };
      },
      providesTags: ["cart"],
    }),

    getSpecificCartDara: builder.query({
      query: (id) => ({
        url: `/cart/${id}`,

        method: "GET",
      }),
      providesTags: ["cart"],
    }),
    getSpecificProductData: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/${id}`,

          method: "GET",
        };
      },
      providesTags: ["cart"],
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
      invalidatesTags: ["cart"],
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
      invalidatesTags: ["cart"],
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
      invalidatesTags: ["cart"],
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
      invalidatesTags: ["cart"],
    }),
    DeleteProductData: builder.mutation({
      query: (id) => {
        console.log("id", id);
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
    }),
    DeleteCartData: builder.mutation({
      query: (id) => {
        console.log("id", id);
        return {
          url: `/cart/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["cart"],
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
  useGetSpecificProductDataQuery,
} = baseApi;

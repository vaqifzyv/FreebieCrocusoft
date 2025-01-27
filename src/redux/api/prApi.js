import { createApi } from "@reduxjs/toolkit/query/react";
import { APIBaseQuery } from "./axiosBase";

export const prApi = createApi({
  reducerPath: "prApi",
  baseQuery: APIBaseQuery,
  endpoints: (build) => ({
    getProducts: build.query({
      query() {
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
    addProduct: build.mutation({
      query(formData) {
        console.log(formData, "gelen data");
        return {
          url: "products",
          method: "POST",
          body: JSON.stringify(formData),
        };
      },
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = prApi;

// import { createApi } from "@reduxjs/toolkit/query/react";
// import { APIBaseQuery } from "./axiosBase";

// export const prApi = createApi({
//   reducerPath: "prApi",
//   baseQuery: APIBaseQuery,
//   endpoints: (build) => ({
//     getProducts: build.query({
//       query() {
//         return {
//           url: "products",
//           method: "GET",
//         };
//       },
//     }),
//     addProductsToBasket: build.mutation({
//       query(product) {
//         return {
//           url: "addedBasket",
//           method: "POST",
//           data: product,
//         };
//       },
//     }),
//   }),
// });

// export const { useGetProductsQuery, useAddProductsToBasketMutation } = prApi;

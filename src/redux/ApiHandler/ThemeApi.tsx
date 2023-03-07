import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'
import { themeApiType } from '../../types/ThemeApiTypes'
// import { urls } from './BackendAPI'
export interface Post {
  [key: string]:string
}
// Define a service using a base URL and expected endpoints
// https://shopmobileapp.cedcommerce.com/shopifymobilenew/graphql/getdata
// http://localhost/magenativenew/shipify-mobile-app/index.php/shopifymobilenew/themeconfig/getthemedata

export const themeApi = createApi({
  reducerPath: 'themeApi',
  keepUnusedDataFor:1,
  baseQuery: fetchBaseQuery({ baseUrl: '/'  }),
  endpoints: (builder) => ({
    gettheme: builder.query<themeApiType, string>({
      query: (name) => `${name}`,
    }),
    findData: builder.mutation<any, any>({
      query: (payload) => ({
                            url: '/graphql/getdata',
                            method: 'POST',
                            body: payload,
                          }),
      // invalidatesTags: ['Post'],
    }),
    getProducts: builder.mutation<any, any>({
      query: (payload) => ({
                            url: '/graphql/products',
                            method: 'POST',
                            body: payload,
                          }),
      // invalidatesTags: ['Post'],
    }),
    saveData: builder.mutation<any, any>({
      query: (payload) => ({
                            url: payload.url,
                            method: 'POST',
                            body: payload.data,
                          }),
      // invalidatesTags: ['Post'],
    }),
    getImageUrl: builder.mutation<any, any>({
      query: (payload) => ({
                            url: payload.url,
                            method: 'POST',
                            body: payload.data,
                          }),
      // invalidatesTags: ['Post'],
    }),
    getTranslatedData: builder.mutation<any, any>({
      query: (payload) => ({
                            url: '/configuretheme/translatethemedata',
                            method: 'POST',
                            body: payload,
                          }),
      // invalidatesTags: ['Post'],
    }),
    getPreview: builder.mutation<any, any>({
      query: (payload) => ({
                            url: payload.url,
                            method: 'POST',
                            body: payload.data,
                          }),
      // invalidatesTags: ['Post'],
    }),
    saveStepData: builder.mutation<any, any>({
      query: (payload) => ({
        url: "onboardingbase/savereactstepdata",
        method: "POST",
        body: payload
      })
    })
    // findData: builder.mutation<any, any>({
    //   query: (payload) => ({
    //     url: '/graphqlstorefont/getdata',
    //     method: 'POST',
    //     body: payload,
    //   }),
    //   // invalidatesTags: ['Post'],
    // }),
    // findProduct: builder.mutation<any, any>({
    //   query: (payload) => ({
    //     url: '/graphql/getdata',
    //     method: 'POST',
    //     body: payload,
    //   }),
    //   // invalidatesTags: ['Post'],
    // }),
})
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetthemeQuery,
               useFindDataMutation,
               useGetProductsMutation,
               useGetImageUrlMutation,
               useSaveDataMutation,
               useGetTranslatedDataMutation,
               useGetPreviewMutation,
               useSaveStepDataMutation
               } = themeApi
//  useFindProductMutation


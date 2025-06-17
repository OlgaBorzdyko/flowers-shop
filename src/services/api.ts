import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Category } from '../types/Products'

export const catalogueApi = createApi({
  reducerPath: 'catalogueApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => '/categories'
    })
  })
})

export const { useGetCategoriesQuery } = catalogueApi

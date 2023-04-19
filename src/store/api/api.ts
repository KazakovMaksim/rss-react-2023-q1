import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from 'constants/index';
import { ProductCard } from 'types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductCard[], string>({
      query: (search) => `/?q=${search}`,
      providesTags: (result, error, search) => [
        {
          type: 'Product',
          id: search,
        },
      ],
    }),
  }),
});

export const { useGetProductsQuery } = api;

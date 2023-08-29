import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { JokesData } from "../../models/Jokes"

export const jokesAPI = createApi({
  reducerPath: "jokesAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.chucknorris.io/jokes/" }),
  endpoints: (builder) => ({
    getJokesBySearch: builder.query<JokesData, string>({
      query: (value) => `search?query=${value}`,
      transformResponse: (response: JokesData, meta, arg) => {
        console.log('response', response)
        return {
          result: response?.result.slice(0, 8),
          total: response?.total,
        }
      },
    }),
  }),
})

export const { useGetJokesBySearchQuery, useLazyGetJokesBySearchQuery } =
  jokesAPI

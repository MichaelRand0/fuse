import { configureStore } from "@reduxjs/toolkit"
import { jokesSlice } from "./features/jokes/jokesSlice"
import { jokesAPI } from "./services/jokesApi"

export const store = configureStore({
  reducer: {
    [jokesAPI.reducerPath]: jokesAPI.reducer,
    jokes: jokesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jokesAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

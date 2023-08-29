import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { Joke } from "../../../models/Jokes"

export interface CounterState {
  jokes: Joke[]
}

const initialState: CounterState = {
  jokes: [],
}

export const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    setJokes: (state, action: PayloadAction<any>) => {
      state.jokes = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setJokes} = jokesSlice.actions

export default jokesSlice

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import jokesSlice from "../redux/features/jokes/jokesSlice"

const useJokes = () => {
  const dispatch = useDispatch()
  const jokesSelector = useSelector((state: RootState) => state.jokes)
  const actions = bindActionCreators({ ...jokesSlice.actions }, dispatch)

  const { jokes } = jokesSelector

  const {setJokes} = actions

  return {
    jokes,
    setJokes,
  }
}

export default useJokes

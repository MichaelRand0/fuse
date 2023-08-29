import { useEffect, useState } from "react"
import Container from "./components/Container"
import Search from "./components/inputs/Search"
import useJokes from "./hooks/jokes"
import JokesList from "./modules/JokesList"
import { useLazyGetJokesBySearchQuery } from "./redux/services/jokesApi"
import Rolling from "./components/icons/Rolling"
import { useDebounce } from "./hooks/debounce"

function App() {
  const [value, setValue] = useState("")
  const [message, setMessage] = useState("")
  const { setJokes, jokes } = useJokes()
  const [fetchJokes, { data, isLoading, isFetching }] = useLazyGetJokesBySearchQuery()
  const debounced = useDebounce(value.trim(), 500)

  useEffect(() => {
    if (debounced.length > 3) {
      fetchJokes(debounced)
    } else {
      setJokes([])
      setMessage(``)
    }
  }, [debounced])

  useEffect(() => {
    if (data?.result) {
      setJokes(data?.result)
      setMessage(`Found jokes: ${data?.total}`)
    }
  }, [data])

  return (
    <Container className="pt-10 pb-5 md:pb-10 sm:pt-16 md:pt-32 flex flex-col items-center">
      <Search
        autoFocus={true}
        message={message}
        value={value}
        onChange={(v) => setValue(v.target.value)}
        className="w-full max-w-[626px] mb-8 sm:mb-[60px]"
        placeholder="Search..."
      />
      {isLoading || isFetching ? <Rolling /> : <JokesList items={jokes} />}
    </Container>
  )
}

export default App

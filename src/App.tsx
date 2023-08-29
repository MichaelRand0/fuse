import { useEffect, useState } from "react"
import Container from "./components/Container"
import Search from "./components/inputs/Search"
import CardJoke from "./components/cards/CardJoke"
import axios, { AxiosResponse } from "axios"
import useJokes from "./hooks/jokes"
import { JokesData } from "./models/Jokes"
import JokesList from "./modules/JokesList"

function App() {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')
  const {setJokes, jokes} = useJokes()
  useEffect(() => {
    const getJokes = async () => {
      axios.get(`https://api.chucknorris.io/jokes/search?query=${value}`).then((resp:AxiosResponse<JokesData, any>) => {
        setJokes(resp.data.result.slice(0, 8))
      })
    }
    if(value.length >= 3) {
      getJokes()
    } else {
      setJokes([])
    }
  }, [value])
  useEffect(() => {
    console.log('jokes', jokes)
  }, [jokes])
  return (
    <Container className="pt-10 sm:pt-16 md:pt-32 flex flex-col items-center">
      <Search message={message} value={value} onChange={v => setValue(v.target.value)} className="w-full max-w-[626px] mb-[60px]" placeholder="Search..." />
      <JokesList items={jokes} />
      {/* <CardJoke author="MichaelRand" date={'05.12.2002'} text='Wilt Chamberlain claims to have slept with more than 20,000 women in his lifetime. Chuck Norris calls this a slow Tuesday.' /> */}
    </Container>
  )
}

export default App

import CardJoke from "../components/cards/CardJoke"
import useDate from "../hooks/date"
import { Joke } from "../models/Jokes"

interface Props {
  items: Joke[]
}

const JokesList = (props: Props) => {
  const {items} = props
  const {getLocalDate} = useDate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-6 xl:gap-5">
      {items?.map((joke, i) => {
        const pos = i + 1
        return <CardJoke url={joke?.url} className={pos > 2 ? 'xl:col-span-2' : 'xl:col-span-3'} key={joke.id} author={joke.id} text={joke.value} date={getLocalDate(joke.created_at)} />
      })}
    </div>
  )
}

export default JokesList
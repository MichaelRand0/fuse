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
    <div>
      {items?.map(joke => {
        return <CardJoke key={joke.id} author={joke.id} text={joke.value} date={getLocalDate(joke.created_at)} />
      })}
    </div>
  )
}

export default JokesList
import CardJoke from "../components/cards/CardJoke"
import { Joke } from "../models/Jokes"

interface Props {
  items: Joke[]
}

const JokesList = (props: Props) => {
  const {items} = props

  return (
    <div>
      {items.map(joke => {
        return <CardJoke author={joke.id} text={joke.value} date={joke.created_at.toString()} />
      })}
    </div>
  )
}

export default JokesList
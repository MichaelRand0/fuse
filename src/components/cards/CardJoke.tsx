interface Props {
  text: string
  author: string
  date: string
}

const CardJoke = (props: Props) => {
  const {text, author, date} = props
  return (
    <div className="pt-10 px-10 pb-[25px] flex flex-col justify-between shadow-cardJoke">
      <p className="text-xl font-normal font-Fira text-dark pb-8">{text}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-grey font-Montserrat font-normal">{author}</span>
        <span className="text-sm text-grey font-Montserrat font-normal">{date}</span>
      </div>
    </div>
  )
}

export default CardJoke

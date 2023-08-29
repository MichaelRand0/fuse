interface Props extends React.ComponentProps<'div'> {
  text: string
  author: string
  date: string
  url: string
}

const CardJoke = (props: Props) => {
  const {text, author, date, url, className} = props
  return (
    <a rel="noreferrer" target="_blank" href={url} className={`p-5 sm:pt-10 sm:px-10 sm:pb-[25px] flex flex-col justify-between shadow-cardJoke ${className}`}>
      <p className="text-base md:text-xl font-normal font-Fira text-dark pb-8">{text}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs md:text-sm text-grey font-Montserrat font-normal pr-3">{author}</span>
        <span className="text-xs md:text-sm text-grey font-Montserrat font-normal">{date}</span>
      </div>
    </a>
  )
}

export default CardJoke

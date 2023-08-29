
interface Props extends React.ComponentProps<'input'> {
  message?: string
}

const Search = (props: Props) => {
  const {className, message = ''} = props
  return (
    <div className={`${className}`}>
      <input {...props} className={`font-Fira w-full px-[30px] py-[15px] text-[22px] font-bold text-brand placeholder-brand-light shadow-input mb-3`} />
      <span className="font-Montserrat pl-6 text-dark text-base font-normal">{message}</span>
    </div>
  )
}

export default Search
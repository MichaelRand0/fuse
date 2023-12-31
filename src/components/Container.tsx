import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const Container = (props: Props) => {
  const {children, className} = props
  return (
    <div className={`w-full max-w-[1596px] px-3 sm:px-5 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
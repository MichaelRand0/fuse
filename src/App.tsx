import { useState } from "react"
import Container from "./components/Container"
import Search from "./components/Search"

function App() {
  const [value, setValue] = useState('')
  return (
    <Container className="pt-10 sm:pt-16 md:pt-32 flex flex-col items-center">
      <Search value={value} onChange={v => setValue(v.target.value)} message="Found jokes: 12" className="w-full max-w-[626px]" placeholder="Search..." />
    </Container>
  )
}

export default App

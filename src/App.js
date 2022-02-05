import { useState } from "react"
import Header from "./components/Header"
import NewsList from "./components/NewsList"

const App = () => {
  const [type, setType] = useState('top')
  return (
    <div>
      <Header setType={setType} />
      <NewsList type={type} />
    </div>
  )
}

export default App

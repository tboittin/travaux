import { useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsList from "./components/NewsList"

const App = () => {
  const [type, setType] = useState('top')
  return (
    <div>
      <Header setType={setType} />
      <NewsList type={type} />
      <Footer/>
    </div>
  )
}

export default App

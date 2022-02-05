import Footer from "./components/Footer"
import Header from "./components/Header"
import NewsList from "./components/NewsList"
import styles from "./styles/App.module.scss"

const App = () => {

  return (
    <div className="App">
      <Header/>
      <NewsList/>
      <Footer/>
    </div>
  )
}

export default App

import './App.scss'
import { useEffect } from "react";
import Header from "./components/UI/Header";
const telegram = window.Telegram.WebApp;

const App = () => {

  useEffect(() => {
    telegram.ready();
  }, [])
  return(
    <>
      <Header />
    </>
  )
}

export default App;
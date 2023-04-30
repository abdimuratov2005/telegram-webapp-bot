import './App.scss'
import { useEffect } from "react";
import Header from "./components/UI/Header";
import { useTelegram } from './hooks/useTelegram';

const App = () => {

  const {telegram, onToggleButton} = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])
  return(
    <>
      <Header />
      <div>
        <button onClick={onToggleButton}>
          ToggleButton
        </button>
      </div>
    </>
  )
}

export default App;
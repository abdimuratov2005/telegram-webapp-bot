import './App.scss'
import { useEffect } from "react";
import Header from "./components/Header";
import { useTelegram } from './hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Form from './components/Form';

const App = () => {

  const {telegram } = useTelegram();

  useEffect(() => {
    telegram.ready();
  }, [])
  return(
    <>
      <Header />
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </>
  )
}

export default App;
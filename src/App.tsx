import { useState } from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Bem Vindo</h1>
    <ul>
      <li><a href="/pessoas">Listar Pessoas</a></li>
      <li><a href="/pessoas/cadastra">Cadastrar Pessoa</a></li>
    </ul>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  
    </>
  )
}

export default App

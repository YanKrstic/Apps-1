import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Linter } from 'eslint'


function App() {
  return <Func />
}
function Func() {
  const [mostrar, setMostrar] = useState(true)
  const epstein = ["Thiago Nogueira", "Israel de souza de mendonça", "Eduardo Silveira", "Gabriel Nascimento"];
  return (
    <>
      {mostrar && <div class="cofre" id="aberto">
        <p>🔓 destrancado 🔓</p>
        <h4>------ EPSTEIN FILES ------  </h4>


        <ul>
          {epstein.map((item, index) => (<li key={index}> {item} </li>))}
        </ul>
      </div>}


      {!mostrar && <div class="cofre" id="fechado">
        <p>🔒 trancado 🔒</p>
        <h4>------ ******* ***** ------  </h4>
      </div>}




      <p><button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Abrir Cadeado 🔑" : "Fechar Cadeado 🔑"}</button></p>
    </>
  )
}


export default App

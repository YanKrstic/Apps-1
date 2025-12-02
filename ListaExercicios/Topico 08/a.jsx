import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import { Linter } from 'eslint'




function App() {
  return <AdicionarLista />
}
function AdicionarLista() {
  const [item, setItem] = useState("")
  const [lista, setLista] = useState([])


  const adicionarItem = () => {
    if (item.trim()) {
      setLista([...lista, item])
      setItem('')
    }
  }
  return (
    <>
      <div>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='Digite um item' />
        <button onClick={adicionarItem}>Adicionar</button>
        <ul>
          {lista.map((itemLista, index) => (
            <li key={index}>{itemLista}</li>
          ))}
        </ul>


      </div>
    </>
  )
}


export default App

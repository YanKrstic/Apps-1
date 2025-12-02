import { useState } from 'react'
import './App.css'


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
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='Digite uma Tarefa' />
        <button onClick={adicionarItem}>Nova Tarefa</button>


        <p>Lista de Afazeres</p>
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

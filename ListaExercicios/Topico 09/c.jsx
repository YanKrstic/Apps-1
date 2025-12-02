import { useState } from 'react'
import './App.css'




function App() {
  return <AlterarCor />
}
function AlterarCor() {
  const [emocao, setEmocao] = useState({ texto: "Arhhhh", emoji: "😌", color: "white" })


  const triste = { texto: "Muááááá", emoji: "😭", color: "lightblue" }
  const feliz = { texto: "Yipeeeee", emoji: "😃", color: "lightgreen" }
  const raivoso = { texto: "Grrrrr!!!", emoji: "😡", color: "red" }
  const calmo = { texto: "Arhhhh", emoji: "😌", color: "white" }


  const mudarEmocao = (novaEmocao) => {
    setEmocao(novaEmocao)
    document.body.style.backgroundColor = emocao.color
    document.getElementById("emoji").innerText = emocao.emoji
    document.getElementById("text").innerText = emocao.texto
  }
 
  return (
    <div>
      <h2 style={{ backgroundColor: "black", borderRadius: "7px", }} >Escolha a emoção</h2>
      <button onClick={() => mudarEmocao(triste)} >triste</button>
      <button onClick={() => mudarEmocao(feliz)} >feliz</button>
      <button onClick={() => mudarEmocao(raivoso)}>raivoso</button>
      <button onClick={() => mudarEmocao(calmo)} >calmo</button>


      <h2 id='emoji' ></h2>
      <h2 id='text' style={{ backgroundColor: "black", borderRadius: "7px", }}></h2>
    </div>
  )


}


export default App

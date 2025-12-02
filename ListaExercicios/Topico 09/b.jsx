import { useState } from 'react'
import './App.css'




function App() {
  return <AlterarCor />
}
function AlterarCor() {
  const [cor, setCor] = useState("10px")


  const mudarCor = (novaCor) => {
    setCor(novaCor)
    document.getElementById("text").style.fontSize = novaCor
  }


  return (
    <div>
      <h2 id='text'>Alterar cor</h2>
      <button onClick={() => mudarCor("10px")} >p</button>
      <button onClick={() => mudarCor("20px")} >m</button>
      <button onClick={() => mudarCor("30px")} >g</button>
    </div>
  )


}


export default App

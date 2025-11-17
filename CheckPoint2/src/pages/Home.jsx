import '../css/App.css';
import { Link } from "react-router-dom";
import XPBar from "../XPBar";
import { useGame } from "../context/GameContext";
import { useState } from 'react';


export default function Home() {
  const { character, resetCharacter, inventario } = useGame();
  const [mostrarDasos, setMostrarDasos] = useState(false)
  //const [mostrarInv, setMostrarInv] = useState(false)

  return (
    <div>
      <h1>CAMPFIRE</h1>
      {character ? (
        <>
        <fieldset>
          <legend><label>Personagem:</label> {character.name} </legend>
        
          <p id='nome'> <label>Nível:</label> {character.nivel}</p>
          <XPBar character={character} />

          { mostrarDasos && <p>

            <label>Classe:</label> {character.class} <label> Raça:</label> {character.race}<br/>
            <label>HP:</label>  {character.hp} <label>XP:</label> {character.xp} <br/>
            <label>Gold:</label> {character.gold} <label>Mana:</label> {character.mana} <br/>
            <label>Força:</label> {character.forca} <label>Resistência:</label> {character.resistencia} <br/>
            <label>Inteligência:</label> {character.inteligencia} <label>Sorte:</label> {character.sorte} <br/>
            <label>pontos de atributos:</label> {character.atb} <br /> <br />

            <label >Inventario:</label>
           <ul>
            {inventario.map((Item, index) => (
            <li key={index}>{Item}</li>
            ))}
           </ul>
          </p>}

          <p><button onClick={() => setMostrarDasos(!mostrarDasos)}>{mostrarDasos ? "Esconder Dados " : "Mostrar mais dados"}</button></p> 
          <button onClick={() => resetCharacter()}>Resetar Personagem</button>
          
          </fieldset>

          <fieldset>
            <legend>Rotas:</legend>
          <p>
          <Link to="store"><button>Loja</button></Link>
          </p>
          <p>
          <Link to="qg"><button>Quartel General</button></Link>
          </p>
          </fieldset>

          
        </>

      ) : (
        <>
          <p>Nenhum personagem criado, crie um personagem para explorar</p>
          <Link to="/create">Criar Personagem</Link>
        </>
      )}
    </div>
  );
}

/*


*/

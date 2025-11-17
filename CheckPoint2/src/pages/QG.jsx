import '../css/App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGame } from "../context/GameContext";



export default function QG() {return (
    <>
    <h2>QUARTEL GENERAL</h2>
    <fieldset>
        <legend>Lista de Heróis</legend>
        <AdicionarLista/>
    </fieldset>

    <fieldset>
        <legend>Lista de Missões</legend>
        <AdicionarMissao/>
    </fieldset>
    </>
    
)}


function AdicionarLista() {
  const [charac, setCarac] = useState("")
  const [nivel, setNivel] = useState(0)
  const [dici, setDici] = useState([])
  const {character} = useGame();

  useEffect(() => {
    if (character?.name) {
      const characterAtual = {
        nomecharac: character.name,
        pontuacao: character.nivel
      };
      setDici([characterAtual]);
    }
  }, [character]); // só roda quando 'character' mudar


  const adicionarItem = () => {

    let pedagio = true


    // verficicar nome repetido
    dici.forEach(element => {
      if (element.nomecharac == charac) {
        element.pontuacao = nivel
        pedagio = false
        setDici(dici.sort(function (a, b) {
          if (a.pontuacao > b.pontuacao) {
            return -1;
          }
          if (a.pontuacao < b.pontuacao) {
            return 1;
          }
          return 0;
        }))
        setNivel(0)
        setCarac("")
      }
    });


    if (pedagio) {
      // gerar
      if (nivel && charac) {
        const obj = {
          nomecharac: charac,
          pontuacao: nivel
        }


        // ordenar
        setDici([...dici, obj].sort(function (a, b) {
          if (a.pontuacao > b.pontuacao) {
            return -1;
          }
          if (a.pontuacao < b.pontuacao) {
            return 1;
          }
          return 0;
        }))
        setNivel(0)
        setCarac("")
      }
    }
  }
  return (
    <>
      <div>
        <ul>
          {dici.map((itemLista, index) => (


            <li key={index}> <strong>nivel:</strong> {itemLista.pontuacao} <strong>Nome:</strong> {itemLista.nomecharac}</li>
          ))}
        </ul>

        Nome:<br />
        <input type="text" value={charac} onChange={(e) => setCarac(e.target.value)} placeholder='Digite o nome do Personagem' /> <br />
        Nivel:<br />
        <input type="number" value={nivel} onChange={(e) => setNivel(e.target.value)} placeholder='Digite o Nível' /> <br />
         <p><button onClick={adicionarItem}>Adicionar Personagem</button></p>


      </div>
    </>
  )
}

function AdicionarMissao() {
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



        <ul>
          {lista.map((itemLista, index) => (
            <li key={index}>{itemLista}</li>
          ))}
        </ul>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder='Digite aqui' />
        <button onClick={adicionarItem}>Nova Missão</button>

      </div>
    </>
  )
}

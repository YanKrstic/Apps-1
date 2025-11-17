import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
'../css/App.css';

export default function CreateCharacter() {
  const [name, setName] = useState("");
  const [classType, setClassType] = useState("Guerreiro");
  const [raceType, setRaceType] = useState("Humano");
  const { setCharacter, character, resetGame } = useGame();
  const navigate = useNavigate();

  // gambiarra maluca para ter os atributos restantes depois do pegagio 
  const [novaATB, setNovaATB] = useState(0);
  
  //atb
  const [forca, setForca] = useState(0);
  const [resist, setResist] = useState(0);
  const [inte, setInte] = useState(0);
  const [sorte, setSorte] = useState(0);

  //pedagio para quando criar o personagem
  const [pedagio, setPedagio] = useState(false);

  //const linhaStyle = { display: "flex", gap: "10px", alignItems: "center" };

  //coisas do personagem
  let gold = 50
  let mana = 20
  let atb = 10

  function Create() {
    if (!name.trim()) return alert("Digite um nome!");

    switch(classType){
      case "Guerreiro": gold += 10; break
      case "Mago": mana += 20; break
      case "Arqueiro": atb += 1; break
      default: return alert("tu quebrou o jogo");
    }
    setCharacter({ name: name, class: classType, race: raceType, hp: 100, gold: gold , atb: atb , mana: mana ,xp: 50, nivel: 1, forca: 0, resistencia: 0, inteligencia: 0, sorte: 0});
    setNovaATB(atb)
    setPedagio(true);

  }
  function AddAtributos(){
    character.forca = forca
    character.resistencia = resist
    character.inteligencia = inte
    character.sorte = sorte

    character.atb = novaATB

    navigate("/")
  }

  return (
    <div>
      <h2>CRIANDO O PERSONAGEM: {name}</h2>
      <p>Nome: <br />
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </p>

      <p>
        Classe: <br />
      <select value={classType} onChange={(e) => setClassType(e.target.value)}>
        <option value="Guerreiro">Guerreiro (+ 10 de ouros inicias e por missão)</option>
        <option value="Mago">Mago (+ 20 de mana inicias e por missão)</option>
        <option value="Arqueiro">Arqueiro (+ 1 de atributo inicias e por missão)</option>
      </select>
      </p>

      <p>Raça: <br />
        <select value={raceType} onChange={(e) => setRaceType(e.target.value)}>
        <option value="Humano">Humano (+1 de resistencia ao derrotar inimigo)</option>
        <option value="Elfo">Elfo (+1 de inteligencia ao derrotar inimigo)</option>
        <option value="Troll">Troll (+1 de força ao derrotar inimigo)</option>
        <option value="Anjo">Anjo (+1 de sorte ao derrotar inimigo)</option>
      </select>
      </p>

      
      

      {pedagio ? (<p>
        <h3>Dados Atuais:</h3>
        <p>
            <label>Classe:</label> {character.class} <label> Raça:</label> {character.race}<br/>
            <label>hp:</label>  {character.hp} <label>xp:</label> {character.xp} <br/>
            <label>gold:</label> {character.gold} <label>mana:</label> {character.mana} <br/>
            <label>pontos de atributos:</label> {character.atb}
        </p>

        <p>Escolha os pontos de melhorias: </p>
        <p>
          <div style={{ display: "grid", gridTemplateColumns: "120px 50px 100px", gap: "5px" }}>
            <div>Força </div> <div>{forca}</div> <div><button onClick={() => {if(novaATB > 0) (setForca(forca + 1), setNovaATB(novaATB - 1))} }> ( + ) </button> <button onClick={() => {if(forca > 0) (setForca(forca - 1), setNovaATB(novaATB + 1))} }> ( - ) </button></div> 
            <div>Resistência</div> <div>{resist}</div>  <div><button onClick={() => {if(novaATB > 0) (setResist(resist + 1), setNovaATB(novaATB - 1))} }> ( + ) </button> <button onClick={() => {if(resist > 0) (setResist(resist - 1), setNovaATB(novaATB + 1))} }> ( - ) </button></div> 
            <div>Inteligência</div> <div>{inte}</div> <div> <button onClick={() => {if(novaATB > 0) (setInte(inte + 1), setNovaATB(novaATB - 1))} }> ( + ) </button> <button onClick={() => {if(inte > 0) (setInte(inte - 1), setNovaATB(novaATB + 1))} }> ( - ) </button></div>
            <div>Sorte </div> <div>{sorte} </div>   <div> <button onClick={() => {if(novaATB > 0) (setSorte(sorte + 1), setNovaATB(novaATB - 1))} }> ( + ) </button> <button onClick={() => {if(sorte > 0) (setSorte(sorte - 1), setNovaATB(novaATB + 1))} }> ( - ) </button></div>
           </div>
        </p>
        <p>Restantes: {novaATB}</p>

        <button onClick={AddAtributos} >Finalizar criação de personagem</button>


      </p>) : (<p>
        
        <button onClick={Create}>Proximo Passo</button> <br />
        Informe esses dados para prosseguir para o proximo passo 
        
        
        </p>)}
    </div>
  );
}

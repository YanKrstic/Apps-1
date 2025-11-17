import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [character, setCharacter] = useState(null);
  const [inventario, setInventario] = useState([]);

  function addItem(item) {
    setInventario((prev) => [...prev, item]);
  }

  function resetCharacter() {
    setCharacter(null);
    setInventario([]);
  }
  function Dano(valor){

    let dano = (Math.trunc(character.resistencia / 2)  - valor);
    
    if(character.hp - danor > 0){
      
      character.hp -= (Math.trunc(character.resistencia / 2)  - valor)
    }
    else if(character.hp - dano <= 0){
      resetCharacter()
    }
  }

  return (
    <GameContext.Provider
      value={{ character, setCharacter, inventario, addItem, resetCharacter }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}

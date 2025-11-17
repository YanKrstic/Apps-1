import '../css/App.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGame } from "../context/GameContext";


export default function Store() {
  const {character, addItem} = useGame();

  // qtd dos itens
  const [porcao, setPorcao] = useState(0);
  const [bomba, setBomba] = useState(0);
  const [lanca, setLanca] = useState(0);
  const [espada, setEspada] = useState(0);

  // pra conseguir atualizar o gold na loja, ja que puxando do character n vai
  const [goldView, setGoldView] = useState(character.gold);

  const [total, setTotal] = useState(0);

  function Comprar() {
    character.gold -= total
    setGoldView(character.gold)
    for(let c = 0; c < porcao; c++) {addItem("porção")}
    for(let c = 0; c < bomba; c++) {addItem("bomba")}
    for(let c = 0; c < lanca; c++) {addItem("lança")}
    for(let c = 0; c < espada; c++) {addItem("espada")}

    setPorcao(0)
    setBomba(0)
    setLanca(0)
    setEspada(0)
    setTotal(0)
    alert("Compra realizada, cheque seu inventário")
  }

  return (
    <div>
      <h1>LOJA!</h1>
      <p>Compre seus itens na minha loja!</p>
      <img src="https://png.pngtree.com/png-clipart/20241005/original/pngtree-vegetable-vendors-character-design-png-image_16203988.png" alt="" style={{height:"150px"}}/>
      <div style={{ display: "grid", gridTemplateColumns: "350px 80px 70px 100px", gap: "5px" }}>
            <div>Itens</div> <div>Golds</div> <div>Quan.</div> <div></div>
            <div>Porção (+10 HP) </div> <div>10</div> <div>{porcao}</div> <div><button onClick={() => {setPorcao(porcao+ 1), setTotal(total + 10)} }> ( + ) </button> <button onClick={() => {if(porcao> 0) (setPorcao(porcao- 1), setTotal(total - 10))} }> ( - ) </button></div> 
            <div>Bomba (+30 Dano)</div><div>30</div> <div>{bomba}</div>  <div><button onClick={() => {setBomba(bomba + 1), setTotal(total + 30)} }> ( + ) </button> <button onClick={() => {if(bomba > 0) (setBomba(bomba - 1), setTotal(total - 30))} }> ( - ) </button></div> 
            <div>Lança (50% de +10 Dano, 50% de +20 Dano)</div> <div>15</div><div>{lanca}</div> <div> <button onClick={() => {setLanca(lanca + 1), setTotal(total + 15)} }> ( + ) </button> <button onClick={() => {if(lanca > 0) (setLanca(lanca - 1), setTotal(total - 15))} }> ( - ) </button></div>
            <div>Espada (50% de +5 Dano, 50% de +30 Dano)</div><div>15</div> <div>{espada} </div>   <div> <button onClick={() => {setEspada(espada + 1), setTotal(total + 15)} }> ( + ) </button> <button onClick={() => {if(espada > 0) (setEspada(espada - 1), setTotal(total - 15))} }> ( - ) </button></div>
      </div>
      <p>Total: {total <= goldView ? <span style={{color:"green"}}>{total}</span> : <span style={{color:"red"}}>{total}</span> } <br />
          Seus Golds: {goldView}</p>

      <p>{total <= goldView ? <button onClick={Comprar}>Comprar</button>: <span></span> } </p>
      

      <Link to="/">
      <button>Voltar para campfire</button>
      </Link>
    </div>
  );
}
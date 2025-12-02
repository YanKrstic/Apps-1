import "./styles.css";
export default function MyApp() {
  return <Func />;
}


function Func() {
  return (
    <>


    </>
  );
}


function Menu(){
  const pratos = [
    {nome: "lasanha Bolonhesa", preco: 32.90, descricao: "massa fresca com molho bom"},
    {nome: "Salmão Grelhado", preco: 45.50, descricao: "Filé de salmão com legumas legais"},
    {nome: "pizza marghurita", preco: 28.90, descricao: "pizza artesanal boa"},
    {nome: "banha de porco com acaraje", preco: 32, descricao: "tradicional bahiano"},
  ]
  return (
    <>
      <div>
        <h1>cardáprio do restaurante</h1>
      </div>
    </>
  );
}

import "./styles.css";
export default function MyApp() {
  return (
    <div>
      <Func />
    </div>
  );
}


function Func() {
  return ( <Saldacoes nome = "Yan krstic"/>)
}


function Saldacoes({nome}) {
  return <h1>Olá, {nome}!</h1>
}

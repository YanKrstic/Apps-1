import "./styles.css";
export default function MyApp() {
  return (
    <div>
      <DataHoraAtual />
    </div>
  );
}


function DataHoraAtual() {
  const agora = new Date();
  const diasSemana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexa",
    "sábado",
  ];
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const diaSemana = diasSemana[agora.getDay()];
  const dia = agora.getDate();
  const mes = meses[agora.getMonth()];
  const ano = agora.getFullYear();
  return (
    <p>
      Hoje é dia {dia} do mês de {mes} de {ano}
    </p>
  );
}



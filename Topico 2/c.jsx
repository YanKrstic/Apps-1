import "./styles.css";
export default function MyApp() {
  return (
    <div>
      <Func nivel={4} pontos={2000} />
    </div>
  );
}


function Func({ nivel, pontos }) {
  const maxPontos = nivel * 1000;
  const progresso = Math.min((pontos / maxPontos) * 100, 100);
  const corBarra = progresso < 30 ? "red" : progresso < 70 ? "orange" : "green";


  return (
    <>
      <div>
        <h2> Nivel: {nivel}</h2>
        <p>
          Pontos: {pontos} / {maxPontos}
        </p>
        <div
          className="progress-conteiner"
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progresso}%`,
              height: "100%",
              backgroundColor: corBarra,
              transitio: "all 0.3s ease",
            }}
            className={`progress-bar ${corBarra}`}
            data-width={progresso}
          ></div>
        </div>
        <p>{progresso.toFixed(1)}% completo</p>
      </div>
    </>
  );
}



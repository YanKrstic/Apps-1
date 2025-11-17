function XPBar({ character }) {
  const xpPorNivel = 300;
  const xpMin = (character.nivel - 1) * xpPorNivel;
  const xpMax = character.nivel * xpPorNivel;
  const progresso = Math.min(((character.xp - xpMin) / (xpMax - xpMin)) * 100, 100);

  const corBarra =
    progresso < 30 ? "red" : progresso < 70 ? "orange" : "green";

  return (
    <div style={{ margin: "10px 0" }}>
      <p>XP: {character.xp} / {xpMax}</p>

      <div
        style={{
          width: "300px",
          height: "20px",
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
            transition: "all 0.3s ease",
          }}
        ></div>
      </div>

      <p>{progresso.toFixed(1)}% até o próximo nível</p>
    </div>
  );
}

export default XPBar;
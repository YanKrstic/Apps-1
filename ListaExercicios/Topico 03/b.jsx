import "./styles.css";
export default function MyApp() {
  return <Func />;
}


function Func() {
  const hobbies = ["leitura", "Natação", "Programação", "Culinária"];
  return (
    <>
      <div>
        <h2>Meus Hobbies Favoritos</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

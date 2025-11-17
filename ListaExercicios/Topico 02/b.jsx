import "./styles.css";
export default function MyApp() {
  let user2 = prompt("qual seu nome?");
  return (
    <div>
      <Func user={user2} />
    </div>
  );
}


function Func({ user }) {
  return <h1> Bem vindo de volta {user} </h1>;
}

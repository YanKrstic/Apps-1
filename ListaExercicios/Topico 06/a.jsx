function App() {
  return <Func />
}
function Func() {
  const [mostrar, setMostrar] = useState(true)


  return (
    <>
      {mostrar && <p>esse texto vai aparecer e desaparecer </p>}
      <p><button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Esconder" : "Mostrar"}</button></p>
    </>
  )
}


export default App

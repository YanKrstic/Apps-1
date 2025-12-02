function App() {
  return <Func />
}
function Func() {
  const [mostrar, setMostrar] = useState(true)


  return (
    <>
      {mostrar && <img src="https://media.tenor.com/8d9UkG3NwvEAAAAM/cat-thinking-baby-thinking.gif" alt="" />}


      <p><button onClick={() => setMostrar(!mostrar)}>{mostrar ? "Esconder gif" : "Mostrar gif"}</button></p>


    </>
  )
}


export default App

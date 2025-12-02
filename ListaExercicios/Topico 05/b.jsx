function App() {
  return <Func />
}
function Func() {


  const [count, setCount] = useState(10)


  return (
    <>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)}>-5</button>
    </>
  )
}


export default App

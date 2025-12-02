function App() {
  return <Func />
}

function CartaoLivro({ titulo, autor, ano, genero }) {
  return (
    <div className='prato-card'>
      <h2>{titulo}</h2>
      <p><strong>Genero:</strong> {genero} </p>
      <p><strong>Escrito por:</strong> {autor} </p>
      <p><strong>Publicado em: </strong> {ano}</p>
    </div>
  );
}

function Func() {
  return (
    <div>
      <div className="menu-grid">
        <CartaoLivro titulo="bronze age mindset" genero="história" ano={1998} autor="yan" />
        <CartaoLivro titulo="livro infantil" genero="educativo" ano={2004} autor="ronaldo" />
      </div>
    </div>
  );
}

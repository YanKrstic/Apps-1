function App() {
  return <Func />
}

function CartaoPessoa({ nome, idade, profissao }) {
  return (
    <div className='prato-card'>
      <h2>{nome}</h2>
      <p><strong>Idade:</strong> {idade} anos</p>
      <p><strong>Profissão:</strong> {profissao}</p>
    </div>
  );
}

function Func() {
  return (
    <div>
      <div className="menu-grid">
        <CartaoPessoa nome="Maria" idade={30} profissao="desenvolvedora" />
        <CartaoPessoa nome="Yan" idade={10} profissao="Gari" />
        <CartaoPessoa nome="Ronaldo" idade={67} profissao="rei de diadema" />
      </div>
    </div>
  );
}

function Menu() {
    const pratos = [
        { nome: "Lasanha Bolonhesa", preco: 32.90, descricao: "massa fresca com molho bom" },
        { nome: "Salmão Grelhado", preco: 45.50, descricao: "Filé de salmão com legumes legais" },
        { nome: "Pizza margherita", preco: 28.90, descricao: "pizza artesanal boa" },
        { nome: "banha de porco com acarajé", preco: 32, descricao: "tradicional baiano" },
    ];

    return (
        <>
            <div>
                <h1>cardápio do restaurante</h1>
                <div className="menu-grid">
                    {pratos.map((prato, index) => (
                        <div key={index} className="prato-card">
                            <h3>{prato.nome}</h3>
                            <p className="preco">R$ {prato.preco.toFixed(2)}</p>
                            <p className="descricao">{prato.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

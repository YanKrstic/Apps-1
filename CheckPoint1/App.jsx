import { useState } from 'react'
import './App.css'

function DashboardEspacial() {
  const [tela, setTela] = useState('dashboard')
  const [nomeComandante, setNomeComandante] = useState('')
  const [planeta, setPlaneta] = useState('marte')

  function Iniciar() {
    setTela('missao')
  }

  if (tela === 'missao') {
    return (
      <div>
        <Saudacao nome={nomeComandante} />
        <DataGalatica planeta={planeta} />
        <StatusMissao planeta={planeta} />
        <InfoPlaneta planeta={planeta} />
        <PrevisaoTempoEspacial planeta={planeta} />
        <RelatorioBordo />
      </div>
    )
  }

  return (
    <div>
      <h1>Dashboard Espacial 🚀</h1>
      
      <p>Seu nome: 
        <input 
          type="text" 
          value={nomeComandante}
          onChange={(e) => setNomeComandante(e.target.value)}
        />
      </p>

      <p>Selecione o planeta destino: 
        <select 
          value={planeta} 
          onChange={(e) => setPlaneta(e.target.value)}
        >
          <option value="marte">Marte</option>
          <option value="venus">Vênus</option>
          <option value="jupiter">Júpiter</option>
        </select>
      </p>

      <button onClick={Iniciar}>Ir para missão</button>
    </div>
  )
}

function Saudacao({ nome }) {
  return <h2>Comandante {nome}, bem-vindo ao painel de controle</h2>
}

function DataGalatica({ planeta }) {
  const agora = new Date()
  
  const formatos = {
    marte: `Sol ${agora.getHours()}.${agora.getMinutes()} • Ciclo ${agora.getDate()}`,
    venus: `Dia ${agora.getDate()}.${agora.getMonth()} • Rotação ${agora.getHours()}`,
    jupiter: `Órbita ${agora.getSeconds()}.${agora.getMilliseconds()} • Anel ${agora.getHours() % 4}`
  }

  return (
    <div className="card">
      <h3>⏰ Data e Hora Galáctica</h3>
      <p>{formatos[planeta] || agora.toLocaleString()}</p>
    </div>
  )
}

function StatusMissao({ planeta }) {
  const progresso = {
    marte: 65,
    venus: 30,
    jupiter: 15
  }

  return (
    <div className="card">
      <h3>📊 Status da Missão</h3>
      <p>Distância percorrida: {progresso[planeta]}%</p>
      <div className="progresso">
        <div 
          className="barra" 
          style={{ width: `${progresso[planeta]}%` }}
        ></div>
      </div>
    </div>
  )
}

function InfoPlaneta({ planeta }) {
  const planetas = {
    marte: {
      nome: "Marte",
      temperatura: "-65°C",
      gravidade: "3.71 m/s²",
      descricao: "Risco de ser taxado ao chegar",
      emoji: "🔴"
    },
    venus: {
      nome: "Venus", 
      temperatura: "462°C",
      gravidade: "8.87 m/s²",
      descricao: "Planeta quente",
      emoji: "🟡"
    },
    jupiter: {
      nome: "Jupiter",
      temperatura: "-145°C", 
      gravidade: "24.79 m/s²",
      descricao: "Planeta onde o satanás esta selado",
      emoji: "🪐"
    }
  }

  const info = planetas[planeta]

  return (
    <div className="card">
      <h3>{info.emoji} Planeta Destino</h3>
      <p><strong>Nome:</strong> {info.nome}</p>
      <p><strong>Temperatura:</strong> {info.temperatura}</p>
      <p><strong>Gravidade:</strong> {info.gravidade}</p>
      <p><strong>Descrição:</strong> {info.descricao}</p>
    </div>
  )
}

function PrevisaoTempoEspacial({ planeta }) {
  const previsoes = {
    marte: {
      clima: "Tempestade de areia",
      umidade: "20%",
      radiacao: "Alta"
    },
    venus: {
      clima: "Chuva ácida", 
      umidade: "50%",
      radiacao: "Média"
    },
    jupiter: {
      clima: "Tempestade elétrica",
      umidade: "30%",
      radiacao: "Extrema"
    }
  }

  const prev = previsoes[planeta]

  return (
    <div className="card">
      <h3>🌌 Tempo Espacial</h3>
      <p><strong>Clima:</strong> {prev.clima}</p>
      <p><strong>Umidade:</strong> {prev.umidade}</p>
      <p><strong>Radiação:</strong> {prev.radiacao}</p>
    </div>
  )
}

function RelatorioBordo() {
  const eventos = [
    "Um rato entrou no motor direito",
    "Marcianos pediram taxa", 
    "Recusamos pagar a taxa",
    "Marcianos tentam nos matar ",
    "Nos matamos os marcianos",
  ]

  return (
    <div className="card">
      <h3>📋 Relatório da Viajem</h3>
      <ol>
        {eventos.map((evento, index) => (
          <li key={index}>{evento}</li>
        ))}
      </ol>
    </div>
  )
}

export default DashboardEspacial
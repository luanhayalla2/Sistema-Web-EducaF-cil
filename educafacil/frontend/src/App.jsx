import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { RelatorioDesempenho } from './pages/RelatorioDesempenho'

export default function App() {
  return (
    <div className="app-root">
      <header className="p-4 bg-blue-600 text-white">
        <div className="container mx-auto">EducaFácil - MVP</div>
      </header>

      <main className="container mx-auto p-6">
        <nav className="mb-6">
          <Link to="/relatorio" className="mr-4 text-blue-600">Relatório</Link>
        </nav>

        <Routes>
          <Route path="/" element={<div>Bem-vindo ao EducaFácil. <Link to="/relatorio">Ver relatório</Link></div>} />
          <Route path="/relatorio" element={<RelatorioDesempenho />} />
        </Routes>
      </main>
    </div>
  )
}

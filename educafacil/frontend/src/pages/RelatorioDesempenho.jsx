import React, { useState, useEffect } from 'react';
import { BarChart } from '../components/BarChart';
import api from '../services/api';

// Fallback de dados usados quando a API não responde
const mockApiData = {
  labels: ['Matemática', 'Português', 'História', 'Ciências', 'Inglês'],
  grades: [8.5, 9.0, 7.0, 8.0, 9.5],
};

export function RelatorioDesempenho() {
  const [studentData, setStudentData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function fetchGrades() {
      setLoading(true);
      setError(null);

      try {
        // Ajuste a rota conforme seu backend (ex: /students/:id/grades)
        const response = await api.get('/grades');
        // Esperamos que a API retorne algo como: { labels: [...], grades: [...] }
        const { labels, grades } = response.data;

        if (mounted && labels && grades) {
          setStudentData({
            labels,
            datasets: [
              {
                label: 'Média de Notas',
                data: grades,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (err) {
        // Se ocorrer erro (API não disponível), usar mock como fallback
        console.warn('Não foi possível obter dados da API, usando mock:', err.message || err);
        const { labels, grades } = mockApiData;
        if (mounted) {
          setStudentData({
            labels,
            datasets: [
              {
                label: 'Média de Notas (mock)',
                data: grades,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          });
          setError('Não foi possível obter dados reais. Mostrando dados mock.');
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchGrades();

    return () => {
      mounted = false;
    };
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Desempenho do Aluno por Disciplina', font: { size: 18 } },
    },
    scales: { y: { beginAtZero: true, max: 10 } },
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {loading ? (
          <p>Carregando dados...</p>
        ) : (
          <>
            {error && <p className="text-yellow-700 mb-4">{error}</p>}
            <BarChart chartData={studentData} chartOptions={chartOptions} />
          </>
        )}
      </div>
    </div>
  );
}

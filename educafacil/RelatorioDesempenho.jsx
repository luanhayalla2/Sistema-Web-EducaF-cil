import React, { useState, useEffect } from 'react';
import { BarChart } from '../components/BarChart';

// Em um cenário real, esses dados viriam de uma chamada à API
const mockApiData = {
  labels: ['Matemática', 'Português', 'História', 'Ciências', 'Inglês'],
  grades: [8.5, 9.0, 7.0, 8.0, 9.5],
};

export function RelatorioDesempenho() {
  const [studentData, setStudentData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Simula a busca de dados da API
    const { labels, grades } = mockApiData;
    
    setStudentData({
      labels: labels,
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
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Desempenho do Aluno por Disciplina',
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10, // Define o valor máximo do eixo Y para 10
      },
    },
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <BarChart chartData={studentData} chartOptions={chartOptions} />
      </div>
    </div>
  );
}
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Se não estiver autenticado, redireciona para a página de login
    // O `replace` evita que o usuário volte para a rota protegida no histórico do navegador
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Renderiza o conteúdo da rota aninhada (a página protegida)
}
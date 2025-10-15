import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function RoleBasedRoute({ allowedRoles }) {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    // Pode ser um componente de Spinner/Loading mais elaborado
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Verifica se o role do usuário está na lista de roles permitidos
  const isAuthorized = allowedRoles.includes(user?.role);

  if (!isAuthorized) {
    // Redireciona para uma página de "Não Autorizado" ou para o dashboard principal
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

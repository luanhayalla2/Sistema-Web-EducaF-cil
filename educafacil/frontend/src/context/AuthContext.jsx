import { createContext, useState, useEffect } from "react";
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 1. Adicionar estado de loading

  // Efeito para carregar o usuário do localStorage na inicialização
  useEffect(() => {
    async function loadStorageData() {
      const storedUser = localStorage.getItem('@EducaFacil:user');
      const storedToken = localStorage.getItem('@EducaFacil:token');

      if (storedToken && storedUser) {
        setUser(JSON.parse(storedUser));
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
      }
      setLoading(false); // 2. Finaliza o loading após a verificação
    }
    loadStorageData();
  }, []);

  async function login(email, password) {
    const response = await api.post('/users/login', { email, password });
    const { user: apiUser, token } = response.data;

    // Armazena no localStorage
    localStorage.setItem('@EducaFacil:user', JSON.stringify(apiUser));
    localStorage.setItem('@EducaFacil:token', token);

    // Define o token no header do Axios
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    // Atualiza o estado
    setUser(apiUser);
  }

  function logout() {
    // Limpa o localStorage
    localStorage.removeItem('@EducaFacil:user');
    localStorage.removeItem('@EducaFacil:token');

    // Limpa o estado e o header do Axios
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  }

  return (
    // `!!user` é uma forma rápida de converter o objeto user em um booleano
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

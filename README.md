# Sistema Web "EducaFácil"

Este é o repositório do projeto "EducaFácil", um sistema web de gestão escolar simplificada desenvolvido como parte do curso Técnico em Desenvolvimento de Sistemas do SENAC.

## 📚 Sobre o Projeto

O EducaFácil visa modernizar e simplificar a gestão de informações acadêmicas, como notas e frequência, oferecendo uma plataforma intuitiva para professores e alunos. Para mais detalhes, consulte o [Plano de Trabalho do Projeto (POT)](/docs/POT_EducaFacil.html).

## 📂 Estrutura de Pastas

O projeto é organizado em uma arquitetura monorepo com as seguintes pastas principais:

- **/backend**: Contém a API RESTful desenvolvida em Node.js com Express.
- **/frontend**: Contém a aplicação de interface do usuário desenvolvida em React.
- **/docs**: Contém a documentação do projeto, incluindo o POT.
- **/database**: Contém scripts SQL para a criação do banco de dados e tabelas.

## 🚀 Como Iniciar

Siga os passos abaixo para configurar e executar o ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Um banco de dados [PostgreSQL](https://www.postgresql.org/download/) ou [MySQL](https://dev.mysql.com/downloads/installer/) instalado e rodando.

### 1. Back-end (API)

```bash
# 1. Navegue até a pasta do backend
cd backend

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (crie um arquivo .env a partir do .env.example)

# 4. Execute a API em modo de desenvolvimento
npm run dev
```

### 2. Front-end (Interface)

```bash
# 1. Em um novo terminal, navegue até a pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Execute a aplicação React
npm run dev
```

Após seguir os passos, a API estará rodando (geralmente em `http://localhost:3001`) e o front-end estará acessível em `http://localhost:5173`.
# 🎓 EducaFácil – Sistema Web de Gestão Escolar

> 💡 Projeto MVP desenvolvido na **Unidade Curricular 7 – Desenvolvimento Web**  
> 🏫 Curso Técnico em **Desenvolvimento de Sistemas – SENAC**  
> 👥 Equipe 1 – Foco em CRUD, autenticação e relatórios  

---

## 📘 Visão Geral do Projeto

O **EducaFácil** é um **sistema web de gestão escolar simplificada**, criado para resolver o problema da **organização manual** de **frequências, notas e relatórios** em escolas e cursos técnicos.

Ele oferece um ambiente digital acessível para **professores e alunos**, com recursos intuitivos de **registro, visualização e análise de desempenho** — tudo em uma plataforma moderna e responsiva.

---

## 🧩 Problema Real

Atualmente, muitas escolas utilizam planilhas ou anotações manuais para controlar a frequência e notas dos alunos.  
Esse método é ineficiente e sujeito a erros, resultando em:

- ❌ Perda de informações importantes  
- ⏱️ Retrabalho para professores  
- 📉 Dificuldade no acompanhamento do desempenho  
- 🔒 Falta de transparência para alunos e responsáveis  

---

## 🎯 Objetivo do Projeto

Criar uma **plataforma web moderna** que permita:

✅ Registrar **frequência diária dos alunos**  
✅ Lançar **notas e médias** por disciplina  
✅ Gerar **relatórios automáticos de desempenho**  
✅ Prover **login seguro** para professores e alunos  
✅ Oferecer **interface responsiva** (desktop, tablet e mobile)  

---

## 🧱 Funcionalidades do MVP

| # | Funcionalidade | Descrição |
|---|----------------|------------|
| 1️⃣ | **Login de professor e aluno** | Acesso com autenticação JWT e níveis de permissão |
| 2️⃣ | **Cadastro de alunos, turmas e disciplinas** | CRUD completo via painel administrativo |
| 3️⃣ | **Registro de presença diária** | Marcação de presença/falta com data automática |
| 4️⃣ | **Lançamento de notas** | Inserção de notas e cálculo automático da média |
| 5️⃣ | **Relatórios de desempenho** | Visualização com gráficos (Chart.js) e filtros |
| 6️⃣ | **Interface responsiva** | Layout adaptável a qualquer dispositivo |

---

## 🧰 Tecnologias Utilizadas

| Categoria | Tecnologia | Finalidade |
|------------|-------------|-------------|
| 💻 **Front-end** | React.js (Vite) | Interface do usuário |
| 🎨 **Estilização** | Tailwind CSS | Design moderno e responsivo |
| ⚙️ **Back-end** | Node.js + Express *(ou Django REST)* | API RESTful e lógica do servidor |
| 🗄️ **Banco de Dados** | MySQL / PostgreSQL | Armazenamento de dados |
| 🔗 **Integração** | Axios | Comunicação entre front e back |
| 📊 **Visualização** | Chart.js | Gráficos de desempenho |
| 🧭 **Gerenciamento** | Trello | Organização de tarefas e sprints |
| 🔐 **Segurança** | bcrypt + JWT | Autenticação segura |
| 🧩 **Versionamento** | Git + GitHub | Controle de versões |

---

## 📁 Estrutura do Projeto

```
educafacil/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── hooks/
│ │ └── App.jsx
│ └── package.json
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── server.js
│ └── package.json
├── database/
│ └── script.sql
├── docs/
│ ├── prints/
│ └── README.md
└── trello-link.txt
```

---

## 🗓️ Planejamento das Sprints

| Sprint | Duração | Objetivos Principais |
|--------|----------|----------------------|
| 🟩 **Sprint 1** | Semana 1 | Definição do escopo, setup inicial (GitHub, Trello) |
| 🟩 **Sprint 2** | Semana 2 | Estruturação front-end/back-end e banco de dados |
| 🟩 **Sprint 3** | Semana 3 | Implementação de CRUDs e autenticação |
| 🟩 **Sprint 4** | Semana 4 | Relatórios, integração de gráficos e responsividade |
| 🟩 **Sprint 5** | Semana 5 | Testes finais, README completo e apresentação |

---

## 💻 Protótipo de Telas (Mockup)

> 🔹 *As imagens abaixo representam o design esperado do sistema.*

### 🔐 Tela de Login  
![Tela de Login](https://cdn.dribbble.com/users/1989153/screenshots/15186131/media/2e79952b62a35f319b25240a9e1ed0b7.png)

### 🏫 Dashboard do Professor  
![Dashboard](https://cdn.dribbble.com/userupload/11376764/file/original-5f547b7b7f4e9a498d1d1b9a8b9e8de0.png)

### 📊 Relatório de Desempenho (Chart.js)  
![Gráfico de Notas](https://cdn.dribbble.com/userupload/11256272/file/original-fbb87b57a469f6e59fdb77e00464896d.png)

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seuusuario/educafacil.git
cd educafacil
```

### 2️⃣ Configurar o Back-end
```bash
cd backend
npm install
npm run dev
```
> Configure o arquivo `.env` com suas credenciais do banco de dados.

### 3️⃣ Configurar o Front-end
```bash
cd ../frontend
npm install
npm run dev
```

### 4️⃣ Acessar o sistema
👉 `http://localhost:5173`

---

## 🧠 Boas Práticas Adotadas

✅ Padrão de rotas RESTful  
✅ Componentização no React  
✅ Validação e feedback de formulários  
✅ Hash de senhas com bcrypt  
✅ Token JWT para autenticação  
✅ Separação entre frontend e backend  
✅ Responsividade com Tailwind CSS  
✅ Documentação contínua (README + Trello)  

---

## 👨‍💻 Equipe de Desenvolvimento

| Integrante | Função | Responsabilidades |
|---|---|---|
| Luan Hayalla | Líder / Full Stack | Coordenação geral, integração front-back e relatórios |
| (Demais integrantes) | Devs / Design | CRUDs, autenticação, layout, banco e testes |

---

## 🌐 Links Oficiais

💾 **GitHub:** `github.com/seuusuario/educafacil`  
🧭 **Trello:** `trello.com/b/seulink/educafacil`  
🎨 **Figma (Protótipo):** `figma.com/file/seulink/educafacil`  

---

## 🏁 Conclusão

O EducaFácil é um projeto que representa a aplicação prática dos conhecimentos adquiridos em Desenvolvimento Web, unindo tecnologia, design e propósito social.

Com este sistema, buscamos facilitar a rotina escolar, reduzir o retrabalho e aumentar a transparência no processo educacional.

> 📚 *“Educar é transformar informação em conhecimento e conhecimento em sabedoria.”*

**Feito com ❤️ pela Equipe EducaFácil**  
*© 2025 – SENAC / Curso Técnico em Desenvolvimento de Sistemas*
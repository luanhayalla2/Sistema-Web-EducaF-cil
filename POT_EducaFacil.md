---
title: "Projeto Integrador: Sistema Web EducaFácil"
author:
  - "Integrantes: (Inserir nomes dos membros do grupo)"
  - "Professor Orientador: (Inserir nome)"
date: "Período Letivo: 2025"
subject: "Técnico em Desenvolvimento de Sistemas"
keywords: "Educação, Tecnologia, Gestão Escolar, SENAC"
---

# Sumário

<!-- O Pandoc irá gerar o sumário aqui automaticamente com a opção --toc -->

# 1. Introdução

## 1.1. Identificação do Projeto

- **Nome do Projeto:** EducaFácil
- **Tipo de Projeto:** Sistema Web (Gestão Escolar)
- **Tema:** Educação e Tecnologia
- **Integrantes:** (Inserir nomes dos membros do grupo)
- **Professor Orientador:** (Inserir nome)
- **Curso:** Técnico em Desenvolvimento de Sistemas
- **Instituição:** SENAC
- **Período Letivo:** 2025

## 1.2. Contextualização do Problema

Atualmente, muitas escolas, cursos técnicos e instituições de ensino enfrentam grandes dificuldades na organização das informações acadêmicas — como frequência dos alunos, lançamento de notas e comunicação com pais e responsáveis.
Grande parte desse processo ainda é manual, feito por meio de planilhas, cadernos ou sistemas internos desatualizados.

Essas práticas resultam em:

- Perda de informações importantes;
- Retrabalho na conferência de dados;
- Falta de transparência e comunicação com responsáveis;
- Dificuldade de análise de desempenho dos alunos.

Diante disso, torna-se necessária uma plataforma digital simples, acessível e responsiva, que permita aos professores e gestores centralizar o controle escolar em um só lugar, otimizando tempo e reduzindo falhas humanas.

## 1.3. Objetivo Geral

Desenvolver um sistema web de gestão escolar simplificada, denominado EducaFácil, que permita o registro de frequência, lançamento de notas e geração de relatórios de desempenho por turma e por aluno, de forma intuitiva, responsiva e segura.

## 1.4. Objetivos Específicos

- Implementar login seguro para professores e alunos, com controle de acesso.
- Criar módulos de cadastro para alunos, turmas e disciplinas.
- Permitir o registro diário de frequência de alunos por turma.
- Desenvolver o lançamento e consulta de notas por disciplina e por período.
- Gerar relatórios e gráficos de desempenho (presença e notas) com visualização clara.
- Garantir responsividade e acessibilidade da interface em dispositivos móveis e desktops.
- Armazenar os dados em um banco relacional (MySQL ou PostgreSQL) de forma estruturada.
- Documentar o projeto com README.md completo, código-fonte no GitHub e gestão no Trello.

# 2. Desenvolvimento

## 2.1. Escopo do Projeto (MVP – Produto Mínimo Viável)

### Funcionalidades Essenciais

| Nº | Funcionalidade | Descrição | Atores Envolvidos |
|----|---------------|-----------|-------------------|
| 1  | Login | Autenticação de professores e alunos com credenciais únicas | Professor / Aluno |
| 2  | Cadastro de Alunos, Turmas e Disciplinas | Formulários para inserir, editar e excluir dados | Administrador / Professor |
| 3  | Registro de Presença | Professores marcam presença diária dos alunos | Professor |
| 4  | Lançamento de Notas | Professores inserem notas por disciplina e período | Professor |
| 5  | Relatórios de Desempenho | Tabelas e gráficos com médias, faltas e aproveitamento | Professor / Aluno |
| 6  | Interface Responsiva | Layout adaptável para celulares, tablets e desktops | Todos |

## 2.2. Tecnologias Sugeridas

### Front-end
- React.js – Criação da interface interativa e responsiva
- Axios – Comunicação entre front e back-end (requisições HTTP)
- Chart.js – Geração de gráficos e relatórios visuais
- CSS / Tailwind / Bootstrap – Estilização e responsividade

### Back-end

- Node.js (Express) ou Django REST Framework – API para controle de dados
- JWT (JSON Web Token) – Autenticação segura de usuários
- RESTful API – Estrutura para comunicação entre cliente e servidor

### Banco de Dados

- PostgreSQL ou MySQL – Armazenamento relacional de informações de alunos, turmas, notas e frequência

## 2.3. Estrutura do Sistema (Arquitetura)

Front-end (React) → comunica-se via Axios → com o Back-end (API REST) → conectado ao Banco de Dados Relacional (PostgreSQL/MySQL).

**Fluxo resumido:**
```
Usuário (professor/aluno)
        ↓
Interface Web (React)
        ↓
API (Node.js / Django)
        ↓
Banco de Dados (MySQL / PostgreSQL)
```

## 2.4. Requisitos do Sistema

### Requisitos Funcionais

- O sistema deve permitir login com autenticação por usuário e senha.
- O professor deve poder cadastrar, editar e excluir turmas, alunos e disciplinas.
- O professor deve poder lançar notas e registrar presenças.
- O aluno deve poder visualizar suas notas e presença.
- O sistema deve gerar relatórios gráficos de desempenho.

### Requisitos Não Funcionais

- Interface deve ser responsiva e intuitiva.
- O sistema deve armazenar os dados de forma segura e persistente.
- A autenticação deve ser feita com JWT.
- O projeto deve ser hospedado em repositório GitHub com documentação.
- O projeto deve ser gerenciado com Trello (Kanban).

## 2.5. Cronograma de Desenvolvimento (Exemplo)

| Etapa | Atividade | Período |
|-------|-----------|---------|
| 1     | Levantamento de requisitos e modelagem do banco de dados | 15/10 – 25/10 |
| 2     | Criação do back-end (API REST e banco)                   | 26/10 – 10/11 |
| 3     | Desenvolvimento do front-end (interfaces React)          | 11/11 – 25/11 |
| 4     | Integração front e back-end                              | 26/11 – 05/12 |
| 5     | Testes, correções e deploy local                         | 06/12 – 10/12 |
| 6     | Documentação e entrega final                             | 11/12 – 15/12 |

## 2.6. Entregas Obrigatórias

- Repositório no GitHub contendo todo o código do projeto
- Estrutura organizada (frontend / backend / banco)
- Arquivo `README.md` completo com:
  - Descrição do sistema, tecnologias, passos de instalação e prints.
- Quadro Kanban no Trello com colunas (A Fazer, Em Progresso, Concluído).
- Apresentação final (pitch + demonstração funcional)

## 2.7. Possíveis Extensões Futuras

- Envio automático de notificações (e-mail/SMS) aos responsáveis;
- Área administrativa com controle de professores;
- Exportação de boletins em PDF;
- Dashboard com indicadores de desempenho geral;
- Integração com API de calendários (Google Calendar).

# 3. Conclusão

O EducaFácil busca modernizar e simplificar a gestão escolar, aproximando alunos, professores e responsáveis através de uma solução web eficiente, segura e de fácil uso.
Com o uso de tecnologias modernas e metodologias ágeis, o sistema oferece uma visão clara e automatizada do desempenho escolar, contribuindo para uma educação mais conectada, transparente e organizada.

-- Arquivo: schema.sql
-- Descrição: Script para criação das tabelas do banco de dados EducaFácil (PostgreSQL).

-- Tabela de Usuários (para login de Professores e Alunos)
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(10) NOT NULL CHECK (tipo_usuario IN ('aluno', 'professor', 'admin')),
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Turmas
CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    ano_letivo INT NOT NULL,
    id_professor_responsavel INT,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_professor_responsavel) REFERENCES usuarios(id)
);

-- Tabela de Disciplinas
CREATE TABLE disciplinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela de Alunos (com informações adicionais)
CREATE TABLE alunos (
    id INT PRIMARY KEY, -- Referencia o ID da tabela de usuários
    matricula VARCHAR(50) UNIQUE NOT NULL,
    data_nascimento DATE,
    id_turma INT,
    FOREIGN KEY (id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (id_turma) REFERENCES turmas(id)
);

-- Tabela de Notas (relaciona aluno, disciplina e nota)
CREATE TABLE notas (
    id SERIAL PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_disciplina INT NOT NULL,
    nota DECIMAL(4, 2) NOT NULL,
    periodo VARCHAR(50) NOT NULL, -- Ex: "1º Bimestre", "Prova 1"
    lancado_em TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_aluno) REFERENCES usuarios(id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id)
);

-- Tabela de Frequência (presença/falta por dia)
CREATE TABLE frequencia (
    id SERIAL PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_disciplina INT NOT NULL,
    data_aula DATE NOT NULL,
    presente BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (id_aluno) REFERENCES usuarios(id),
    FOREIGN KEY (id_disciplina) REFERENCES disciplinas(id)
);
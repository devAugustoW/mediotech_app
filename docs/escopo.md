# MEDIOTECH

## INTRODUÇÃO

- O **Mediotech** é uma plataforma PWA de gestão educacional
- Focada em conectar e facilitar a comunicação entre:
    - Coordenadores
    - Professores
    - Alunos
- Seu objetivo é oferecer uma solução intuitiva, moderna e segura para o ambiente acadêmico.

## VISÃO GERAL DO SISTEMA

- Aplicação baseada em **Progressive Web App (PWA)**.
- Estrutura de gestão para os seguintes módulos principais:
    - **Usuários:** Coordenadores, Professores e Alunos.
    - **Turmas:** Unidades organizacionais que agrupam **professores**, **alunos** e **disciplinas**.
    - **Disciplinas:** Matérias associadas a uma **turma** e a um ou mais **professores**.
    - **Atividades:** Avaliações que fazem parte das **disciplinas**.
    - **Comunicados:** Mensagens oficiais enviadas por coordenadores e professores.
    - **Notificações Push:** Alertas automáticos para eventos relevantes (ex: novos comunicados, lançamento de notas).
    - **Dashboards personalizados:** Cada perfil tem uma visualização adaptada às suas responsabilidades.

## REGRAS DO NEGÓCIO

### Gestão de Usuários e Estrutura Acadêmica

- **Coordenador pode:**
   - Cadastrar outros coordenadores, professores e alunos.
   - Criar turmas e disciplinas.
   - Associar:
      - Disciplinas a uma turma.
      - Alunos a uma turma.
      - Professores a disciplinas.
   - Criar comunicados do tipo (tipos a definir)
- **Professores podem:**
   - Lançar notas em atividades.
   - Criar comunicados do tipo:
      - “Atividade” (obrigando a resposta do aluno com .pdf ou link)
      - “Comunicado Geral”
      - Outros tipos a definir.
- **Alunos podem:**
   - Responder comunicados do tipo “Atividade”.
   - Enviar respostas com anexos (PDF ou links).
   - Acompanhar o seu progresso escolar quando logado

### Organização Acadêmica

- **Turmas:**
   - Cada turma contém um conjunto de alunos, professores e disciplinas.
- **Disciplinas:**
   - Cada disciplina possui **duas atividades obrigatórias**.
- Atividades:
   - Cada atividade recebe uma nota
- Nota:
   - As notas vão de 0 a 10.

### Notificações e Interações

- Notificações push são enviadas automaticamente para:
   - Novos comunicados.
   - Lançamento de notas.

## FUNCIONALIDADES

- COORDENADOR
   - Cadastrar:
      - Coordenadores
      - Professores
      - Alunos
      - Turmas
      - Disciplinas
   - Associar:
      - Disciplinas a Turma.
      - Alunos a Turma.
      - Professores a Disciplinas (automaticamente vinculando à turma associada)
   - Enviar comunicados para:
      - Turmas
      - Professores
      - Alunos específicos
   - Visualizar dashboards com:
      - Indicadores (quantidade de alunos, turmas, professores)
      - Gráficos de progresso:
         - Cadastro de alunos por turma
         - Professores vinculados às disciplinas
         - Desempenho escolar por turma
      - Mini tabela de Turmas:
         - Informações de série
         - Turno
         - Número de alunos
         - Progresso das notas
         - Ícones de ação
         - Visualizar indicadores:
            - Total de turmas
            - Total de alunos
- PROFESSOR
   - **Lançar notas**:
      - Cada disciplina possui 2 atividades.
      - Notas são atribuídas por atividade, por aluno, dentro da respectiva disciplina.
   - **Enviar comunicados** para:
      - Turmas
      - Coordenadores
      - Professores
      - Alunos específicos
   
   - Enviar comunicados para Turmas, Coordenadores, Professores ou alunos específicos.
   - **Visualizar dashboard personalizado**, com:
      - Visualizar painel inicial (Home) com:
         - Total de turmas, disciplinas e alunos atendidos
         - Gráfico de progresso escolar (baseado nas atividades lançadas e notas atribuídas)
         - Lista de atividades recentes com ações rápidas
- ALUNOS
    - Visualizar suas notas por disciplina e atividade.
    - Visualizar comunicados recebidos.
    - Acesso a dashboard com resumo de desempenho.
      - Visualizar painel inicial (Home) com:
         - Lista com comunicados recentes
         - Cards com nome da disciplina e notas das atividades
    

## TELAS

- LOGIN / INTRODUÇÃO
- LAYOUT
   - **Sidebar:** Navegação por seções (Home, Turmas, Disciplinas, etc.)
   - **Header:** Informações gerais, ícones de perfil e notificações
   - **Content:** Área dinâmica que muda conforme a navegação
- CONTENT
   - COORDENADOR
      - COORDINATOR_HOME
         - Lista com os últimos comunicados enviados
               - Ícone, Assunto, Destinatário(s), Ações (Editar, Deletar)
         - Indicadores:
               - Total de turmas
               - Total de alunos
               - Total de professores
         - Gráficos:
               - Progresso: alunos cadastrados em turmas
               - Progresso: professores vinculados às disciplinas
               - Progresso escolar de até 4 turmas
               
      - COORDINATOR_CLASSES
         - Botão "Nova Turma" → Abre modal de cadastro
         - Botão "Ver todas as turmas" → Abre `COORDINATOR_CLASSES_LIST`
         - Tabela de Turmas
               - Nome, Série, Turno, Nº de Alunos, Progresso de notas, Ações (Editar, Deletar)
         - Indicadores
               - Total de Turmas
               - Total de Alunos
         - Gráfico de Barras
               - Média de alunos por Série 1º, 2º e 3º
      - COORDINATOR_CLASSES_LIST
         - Abre ao clicar em "Turmas”
         - Lista detalhada de turmas:
               - Nome, Série,
               - Turno,
               - Nº de Alunos,
               - Situação (Notas incompletas / Falta disciplina / Tudo em dia),
               - Progresso de notas
         - Ícones de ação
               - Enviar Comunicado (com turma pré-selecionada)
               - Editar
               - Deletar
         - Ao clicar em uma linha de uma turma:
               - Expande a linha para exibir as **Disciplinas associadas à turma**.
               - Para cada disciplina, exibir:
                  - Nome da disciplina
                  - Professor responsável
                  - Situação (ex.: “Notas lançadas”, “Atividades pendentes”) *(sugestão de campos úteis)*
         - Clique na linha de uma disciplina (expandida):
               - Expande novamente para exibir a **lista de alunos daquela turma**.
               - Para cada aluno, exibir:
                  - Nome completo
                  - Situação da atividade (Entregue / Atrasada / Não enviada)
                  - Nota (se lançada)
                  - Presença (se aplicável)
         
      - COORDINATOR_DISCIPLINES
      - COORDINATOR_TEACHERS
      - COORDINATOR_STUDENT
      - COORDINATOR_ANNOUCEMENTS
   - PROFESSOR
      - TEACHER_HOME
         - Lista com Atividades Recentes
               - Ícone
               - Disciplina
               - Título da atividade
               - Ddata de envio
               - Ícones de ação (editar e deletar)
         - Gráficos Progresso escolar das classes
               - Medição baseada na quantidade de atividades lançadas e notas atribuídas
               - Considera:
                  - Cada disciplina possui 2 atividades
                  - Para estar completo, cada aluno deve ter 2 notas atribuídas por disciplina
         - Indicadores:
               - Total de Turmas
               - Total de Disciplinas
               - Total de Alunos
               
      - TEACHER_CLASSES
      - TEACHER_DISCIPLINES
      - TEACHER_ANNOUCEMENTS
   - ALUNO
      - STUDENT_HOME
         - Lista com comunicados recentes
         - Cards com nome da disciplina e notas das atividades
         - Gráfico com desempenho acadêmico

## MODELAGEM DE DADOS

- SQL
    
   1. TABELAS DE USUÁRIOS E AUTENTICAÇÃO
    
   ```sql
   CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role VARCHAR(20) CHECK (role IN ('COORDINATOR', 'TEACHER', 'STUDENT')) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
    
   2. TURMAS E DISCIPLINAS
   
   ```sql
   CREATE TABLE classes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      grade VARCHAR(20), -- Ex: 1º ano, 2º ano
      shift VARCHAR(20), -- Ex: "Manhã", "Tarde", "Noite"
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   CREATE TABLE disciplines(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
   
   3. RELACIONAMENTOS ENTRE PROFESSORES, DISCIPLINAS E TURMAS
   
   ```sql
   CREATE TABLE class_disciplines (
      id SERIAL PRIMARY KEY,
      class_id INT REFERENCES classes(id) ON DELETE CASCADE,
      disciplines_id INT REFERENCES disciplines(id) ON DELETE CASCADE,
      teacher_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      UNIQUE (class_id, disciplines_id)
   );
   
   CREATE TABLE teacher_discipline (
      id SERIAL PRIMARY KEY,
      teacher_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      discipline_id INTEGER NOT NULL REFERENCES disciplines(id) ON DELETE CASCADE,
      assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      UNIQUE (teacher_id, discipline_id)
   );
   ```
   
   4. VÍNCULO DE ALUNOS ÀS TURMAS
   
   ```sql
   CREATE TABLE student_classes (
      id SERIAL PRIMARY KEY,
      student_id INT REFERENCES users(id) ON DELETE CASCADE,
      class_id INT REFERENCES classes(id) ON DELETE CASCADE,
      UNIQUE (student_id)
   );
   ```
   
   5. ATIVIDADES E NOTAS (2 por disciplina por aluno)
   
   ```sql
   CREATE TABLE activities (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      description TEXT,
      subject_id INTEGER REFERENCES subjects(id) ON DELETE CASCADE,
      class_id INTEGER REFERENCES classes(id) ON DELETE CASCADE,
      created_by INTEGER REFERENCES users(id),
      due_date DATE,
      created_at TIMESTAMP DEFAULT NOW()
   );
   
   CREATE TABLE grades (
      id SERIAL PRIMARY KEY,
      activity_id INTEGER REFERENCES activities(id) ON DELETE CASCADE,
      student_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      grade NUMERIC(4,2) CHECK (grade >= 0 AND grade <= 10),
      feedback TEXT,
      submitted_at TIMESTAMP,
      UNIQUE(activity_id, student_id)
   );
   ```
   
   6. COMUNICADOS
   
   ```sql
   CREATE TABLE announcements (
      id SERIAL PRIMARY KEY,
      title VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      type VARCHAR(30) CHECK (type IN ('atividade', 'comunicado_geral')),
      sender_id INTEGER REFERENCES users(id),
      created_at TIMESTAMP DEFAULT NOW()
   );
   ```
   
   7. DESTINATÁRIOS DOS COMUNICADOS
   
   ```sql
   CREATE TABLE announcement_targets (
      id SERIAL PRIMARY KEY,
      announcement_id INTEGER REFERENCES announcements(id) ON DELETE CASCADE,
      target_user_id INTEGER REFERENCES users(id),
      target_class_id INTEGER REFERENCES classes(id),
      target_subject_id INTEGER REFERENCES subjects(id)
   );
   ```
   
   8. RESPOSTAS DE ATIVIDADES (alunos respondem comunicados do tipo "Atividade")
   
   ```sql
   CREATE TABLE activity_responses (
      id SERIAL PRIMARY KEY,
      student_id INTEGER REFERENCES users(id),
      announcement_id INTEGER REFERENCES announcements(id) ON DELETE CASCADE,
      file_url TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(student_id, announcement_id)
   );
   ```
   
   9. NOTIFICAÇÕES (Push Notifications)
   
   ```sql
   CREATE TABLE notifications (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      content TEXT,
      is_read BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT NOW()
   );
   ```
    

## TECNOLOGIAS

- FRONTEND
   - React.js (vite)
   - Tailwind
   - Axios
   - React Router (navegação entre telas)
   - Context API (gerenciamento de estado)
   - DotEnv para variáveis de ambiente
- BACKEND
   - **TypeScript**
   - Express (API RESTful)
   - Prisma ORM
   - JWT (autenticação com token)
   - Bcrypt (hash de senhas)
   - CORS e Helmet (segurança básica da API)
   - DotEnv para variáveis de ambiente
- **BANCO DE DADOS**
   - PostgreSQL
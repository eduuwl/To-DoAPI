# 📌 To-Do API - Gerenciamento de Tarefas 🚀

API RESTful para gerenciamento de tarefas, construída com **NestJS** e **PostgreSQL**, permitindo criar, listar, atualizar e excluir tarefas.

---

##  Funcionalidades
 - **Criar uma nova tarefa**
 - **Listar todas as tarefas**  
 - **Buscar tarefa por ID**  
 - **Atualizar status de uma tarefa**  
 - **Excluir uma tarefa**  

---

##  **Tecnologias Utilizadas**
- **Node.js** + **NestJS**
- **PostgreSQL** com **TypeORM**
- **Docker** para ambiente de desenvolvimento
- **Jest** para testes unitários
- **Swagger** para documentação

---

##  **1. Pré-requisitos**
Antes de começar, você precisará ter as seguintes ferramentas instaladas:
- **[Node.js 20+](https://nodejs.org/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Docker](https://www.docker.com/)**
- **[Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar a API**

---

##  **2. Instalação**
1️⃣ Clone este repositório:  
```bash
git clone https://github.com/eduuwl/To-DoAPI.git
cd seu-repositorio
```

2️⃣ Instale as dependências:
```bash
npm install
```

3️⃣ Crie um arquivo **.env** na raiz do projeto e configure as variáveis do banco:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=root
DATABASE_NAME=todo_db
```

---

##  **3. Executando o Projeto**
Inicie o servidor com:
```bash
npm run dev
```
A API estará rodando em:
 `http://localhost:3010`

###  **Com Docker**
Caso queira rodar com Docker, execute:
```bash
docker-compose up --build
```


---

##  **4. Documentação da API (Swagger)**
Após iniciar a API, acesse a documentação no navegador:  
 `http://localhost:3010/api`

---

##  **5. Exemplos de Uso no Insomnia / Postman**
###  **Criar uma nova tarefa (POST)**
- **URL:** `http://localhost:3010/tasks`
- **Body (JSON)**:
```json
{
  "title": "Minha primeira tarefa",
  "description": "Descrição da tarefa",
  "activityDate": "2025-03-12T20:00:00.000Z",
  "status": "pendente"
}
```

###  **Listar todas as tarefas (GET)**
- **URL:** `http://localhost:3010/tasks`

###  **Buscar uma tarefa por ID (GET)**
- **URL:** `http://localhost:3010/tasks/id`

###  **Atualizar status da tarefa (PATCH)**
- **URL:** `http://localhost:3010/tasks/id`
- **Body (JSON)**:
```json
{
  "status": "em andamento"
}
```

###  **Excluir uma tarefa (DELETE)**
- **URL:** `http://localhost:3010/tasks/id`

---

##  **6. Rodando os Testes**
Para rodar os testes unitários:
```bash
npm run test
```
---

## **8. Dificuldades Encontradas**
Durante o desenvolvimento da API, enfrentei algumas dificuldades, principalmente em:

- **UUID no banco: Como nunca havia utilizado UUID como identificador primário no TypeORM, tive dificuldades na configuração inicial e no uso correto da biblioteca uuid.**

---

## **9. Outras informações**
- **Tempo dedicado no projeto (09/03 -> 11/03)**


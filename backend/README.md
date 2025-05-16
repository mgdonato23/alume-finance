# **Alume Finance API**

A **Alume Finance API** é uma aplicação backend desenvolvida para gerenciar autenticação, perfis de estudantes e simulações financeiras. Esta API foi construída utilizando Node.js, Express, Prisma e Swagger para documentação.

---

## **Índice**
- [Recursos](#recursos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Execução](#execução)
- [Rotas da API](#rotas-da-api)
- [Documentação](#documentação)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## **Recursos**
- **Autenticação JWT**: Registro e login de usuários com geração de tokens JWT.
- **Gerenciamento de Estudantes**: Obtenção e atualização de perfis de estudantes.
- **Simulações Financeiras**: Criação e listagem de simulações financeiras.
- **Documentação Swagger**: Interface interativa para explorar e testar a API.

---

## **Tecnologias Utilizadas**
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM para manipulação do banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Swagger**: Documentação interativa da API.
- **TypeScript**: Superset do JavaScript para tipagem estática.

---

## **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/alume-finance.git
   cd alume-finance/backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Certifique-se de ter o PostgreSQL instalado e em execução.

---

## **Configuração**

1. Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:
   ```env
   PORT=3001
   DATABASE_URL="postgresql://<usuario>:<senha>@localhost:5432/alume_finance?schema=public"
   JWT_SECRET="sua_chave_secreta"
   ```

2. Configure o banco de dados com o Prisma:
   ```bash
   npx prisma migrate dev
   ```

---

## **Execução**

### **Modo de Desenvolvimento**
Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```

### **Modo de Produção**
1. Compile o projeto:
   ```bash
   npm run build
   ```

2. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor estará disponível em `http://localhost:3001`.

---

## **Rotas da API**

### **Autenticação**
- `POST /register`: Registrar um novo usuário.
- `POST /login`: Fazer login e obter um token JWT.

### **Estudantes**
- `GET /me`: Obter o perfil do estudante autenticado.
- `PUT /me`: Atualizar o perfil do estudante autenticado.

### **Simulações**
- `POST /simulations`: Criar uma nova simulação.
- `GET /simulations`: Listar todas as simulações do usuário autenticado.

---

## **Documentação**

A documentação Swagger está disponível em:
```
http://localhost:3001/api-docs
```

Use esta interface para explorar e testar os endpoints da API.

---

## 📄 Licença

Este projeto está sob a licença [MIT](../LICENSE).

---


# Alume Finance - Frontend

Bem-vindo ao **Alume Finance**, uma aplicação web para gerenciar simulações financeiras e perfis de usuários. Este repositório contém o código-fonte do frontend, desenvolvido com **React**, **Tailwind CSS** e outras tecnologias modernas.

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
- [React Router](https://reactrouter.com/) - Gerenciamento de rotas.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário.
- [React Hot Toast](https://react-hot-toast.com/) - Notificações elegantes.
- [Vite](https://vitejs.dev/) - Ferramenta de build rápida para desenvolvimento.
- [TypeScript](https://www.typescriptlang.org/) - Superset do JavaScript com tipagem estática.

---

## 📂 Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

```
index.html
package.json
README.md
tailwind.config.js
vite.config.ts
src/
├── App.tsx
├── index.css
├── main.tsx
├── components/
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── Sidebar.tsx
├── contexts/
│   └── AuthContext.tsx
├── pages/
│   ├── LoginPage.tsx
│   ├── NewSimulationPage.tsx
│   ├── ProfilePage.tsx
│   ├── RegisterPage.tsx
│   └── SimulationsPage.tsx
├── services/
│   ├── api.ts
│   └── simulation.service.ts
├── types/
│   ├── simulation.ts
│   └── student.ts
└── utils/
    └── format.ts
```

---

## 📖 Funcionalidades

- **Autenticação de Usuários**: Login e registro de novos usuários.
- **Simulações Financeiras**: Criação, visualização e gerenciamento de simulações financeiras.
- **Gerenciamento de Perfis**: Atualização de informações do perfil do usuário.
- **Interface Responsiva**: Design adaptado para diferentes dispositivos.

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/alume-finance-frontend.git
   cd alume-finance-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```


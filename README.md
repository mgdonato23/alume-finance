# Alume Finance

O **Alume Finance** é uma aplicação web completa para gerenciar simulações financeiras e perfis de usuários. O projeto é dividido em duas partes principais: o **frontend**, responsável pela interface do usuário, e o **backend**, que fornece a API para autenticação, gerenciamento de perfis e simulações financeiras.

---

## 🚀 Objetivo do Projeto

O objetivo do **Alume Finance** é oferecer uma solução prática e eficiente para estudantes simularem financiamentos, gerenciarem seus perfis e acompanharem suas simulações financeiras. A aplicação é projetada para ser intuitiva, responsiva e segura, utilizando tecnologias modernas para garantir uma experiência de usuário de alta qualidade.

---

## 🛠️ Funcionalidades

### **Frontend**
- **Autenticação de Usuários**: Login e registro de novos usuários.
- **Simulações Financeiras**: Criação, visualização e gerenciamento de simulações financeiras.
- **Gerenciamento de Perfis**: Atualização de informações do perfil do usuário.
- **Interface Responsiva**: Design adaptado para diferentes dispositivos.
- **Notificações Elegantes**: Feedback visual para ações do usuário.

### **Backend**
- **Autenticação JWT**: Registro e login de usuários com geração de tokens JWT.
- **Gerenciamento de Estudantes**: Obtenção e atualização de perfis de estudantes.
- **Simulações Financeiras**: Criação e listagem de simulações financeiras.
- **Documentação Swagger**: Interface interativa para explorar e testar a API.
- **Validação de Dados**: Garantia de integridade e consistência dos dados enviados para a API.

---

## 📂 Estrutura do Projeto

### **Frontend**
O frontend foi desenvolvido utilizando **React**, **TypeScript** e **Tailwind CSS**, com suporte a rotas e gerenciamento de estado. Ele é responsável por toda a interface do usuário e comunicação com a API.

Principais diretórios:
- `components/`: Componentes reutilizáveis como Navbar, Sidebar e Layout.
- `contexts/`: Contexto de autenticação para gerenciar o estado do usuário.
- `pages/`: Páginas principais da aplicação, como Login, Registro, Perfil e Simulações.
- `services/`: Serviços para comunicação com a API.
- `types/`: Tipos TypeScript para garantir tipagem estática.
- `utils/`: Funções utilitárias, como formatação de valores.

### **Backend**
O backend foi desenvolvido com **Node.js**, **Express** e **Prisma**, utilizando **TypeScript** para maior segurança e escalabilidade. Ele fornece uma API RESTful para autenticação, gerenciamento de perfis e simulações financeiras.

Principais diretórios:
- `controllers/`: Controladores que lidam com a lógica das rotas.
- `middlewares/`: Middlewares para autenticação, validação e tratamento de erros.
- `routes/`: Rotas da API organizadas por funcionalidade.
- `schemas/`: Esquemas de validação utilizando Zod.
- `services/`: Serviços que encapsulam a lógica de negócios.
- `utils/`: Utilitários como classes de erro personalizadas.
- `prisma/`: Configuração do banco de dados e esquema Prisma.

---

## 🌐 Tecnologias Utilizadas

### **Frontend**
- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas.
- **Tailwind CSS**: Framework CSS utilitário.
- **React Hot Toast**: Notificações elegantes.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **TypeScript**: Superset do JavaScript com tipagem estática.

### **Backend**
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework web para Node.js.
- **Prisma**: ORM para manipulação do banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **Swagger**: Documentação interativa da API.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Zod**: Validação de dados.

---

## 📖 Documentação da API

A API do backend é documentada utilizando **Swagger**, permitindo que os desenvolvedores explorem e testem os endpoints de forma interativa. A documentação inclui detalhes sobre autenticação, gerenciamento de perfis e simulações financeiras.

---

## 📋 Conclusão

O **Alume Finance** é uma aplicação robusta e moderna, projetada para atender às necessidades de estudantes que desejam simular financiamentos e gerenciar suas informações de forma prática e segura. Com uma interface intuitiva e uma API bem estruturada, o projeto é uma solução completa para o gerenciamento de simulações financeiras.
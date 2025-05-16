import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Alume Finance API",
      version: "1.0.0",
      description: "API documentation for Alume Finance",
    },
    servers: [
      {
        url: "http://localhost:3001/api", // Update this if your base URL changes
      },
    ],
    components: {
      schemas: {
        RegisterUser: {
          type: "object",
          properties: {
            nome: { type: "string", description: "Nome do usuário" },
            sobrenome: { type: "string", description: "Sobrenome do usuário" },
            email: { type: "string", description: "Email do usuário" },
            senha: { type: "string", description: "Senha do usuário" },
          },
          required: ["nome", "sobrenome", "email", "senha"],
        },
        LoginUser: {
          type: "object",
          properties: {
            email: { type: "string", description: "Email do usuário" },
            senha: { type: "string", description: "Senha do usuário" },
          },
          required: ["email", "senha"],
        },
        CreateSimulation: {
          type: "object",
          properties: {
            valor_total: { type: "number", description: "Valor total da simulação" },
            quantidade_parcelas: { type: "number", description: "Quantidade de parcelas" },
            juros_ao_mes: { type: "number", description: "Taxa de juros ao mês" },
          },
          required: ["valor_total", "quantidade_parcelas", "juros_ao_mes"],
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["src/routes/*.ts"]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger docs available at http://localhost:3001/api-docs");
};
import { z } from "zod"

export const registerSchema = z.object({
  body: z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
    sobrenome: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  }),
})

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email("Email inválido"),
    senha: z.string().min(1, "Senha é obrigatória"),
  }),
})

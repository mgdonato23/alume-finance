import { z } from "zod"

export const updateStudentSchema = z.object({
  body: z.object({
    nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").optional(),
    sobrenome: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres").optional(),
    email: z.string().email("Email inválido").optional(),
  }),
})

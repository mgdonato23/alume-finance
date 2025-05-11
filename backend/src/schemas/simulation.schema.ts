import { z } from "zod"

export const createSimulationSchema = z.object({
  body: z.object({
    valor_total: z.number().positive("Valor total deve ser positivo"),
    quantidade_parcelas: z.number().int().positive("Quantidade de parcelas deve ser um número inteiro positivo"),
    juros_ao_mes: z.number().positive("Juros ao mês deve ser positivo"),
  }),
})

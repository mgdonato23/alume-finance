export interface Simulation {
  id: string
  id_estudante: string
  valor_total: number
  quantidade_parcelas: number
  juros_ao_mes: number
  valor_parcela_mensal: number
  createdAt: string
  updatedAt: string
}

export interface SimulationInput {
  valor_total: number
  quantidade_parcelas: number
  juros_ao_mes: number
}

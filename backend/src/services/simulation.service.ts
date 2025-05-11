import { prisma } from "../server"

export class SimulationService {
  public async createSimulation(data: {
    id_estudante: string
    valor_total: number
    quantidade_parcelas: number
    juros_ao_mes: number
  }) {
    // Calculate monthly payment using Price formula
    // PMT = PV * (i / (1 - (1 + i)^-n))
    const valorTotal = data.valor_total
    const jurosAoMes = data.juros_ao_mes
    const quantidadeParcelas = data.quantidade_parcelas

    const valorParcelaMensal = this.calculateMonthlyPayment(valorTotal, jurosAoMes, quantidadeParcelas)

    // Create simulation
    const simulation = await prisma.simulacaoFinanciamento.create({
      data: {
        id_estudante: data.id_estudante,
        valor_total: valorTotal,
        quantidade_parcelas: quantidadeParcelas,
        juros_ao_mes: jurosAoMes,
        valor_parcela_mensal: valorParcelaMensal,
      },
    })

    return simulation
  }

  public async getSimulationsByStudentId(studentId: string) {
    const simulations = await prisma.simulacaoFinanciamento.findMany({
      where: { id_estudante: studentId },
      orderBy: { createdAt: "desc" },
    })

    return simulations
  }

  private calculateMonthlyPayment(valorTotal: number, jurosAoMes: number, quantidadeParcelas: number): number {
    // Convert percentage to decimal (e.g., 2% -> 0.02)
    const jurosDecimal = jurosAoMes / 100

    // PMT = PV * (i / (1 - (1 + i)^-n))
    const numerator = jurosDecimal
    const denominator = 1 - Math.pow(1 + jurosDecimal, -quantidadeParcelas)

    const monthlyPayment = valorTotal * (numerator / denominator)

    // Round to 2 decimal places
    return Math.round(monthlyPayment * 100) / 100
  }
}

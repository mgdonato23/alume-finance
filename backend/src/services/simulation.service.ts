import { prisma } from "../server"

export class SimulationService {
  public async createSimulation(data: {
    id_estudante: string
    valor_total: number
    quantidade_parcelas: number
    juros_ao_mes: number
  }) {
    const valorTotal = data.valor_total
    const jurosAoMes = data.juros_ao_mes
    const quantidadeParcelas = data.quantidade_parcelas

    const valorParcelaMensal = this.calculateMonthlyPayment(valorTotal, jurosAoMes, quantidadeParcelas)

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
    const jurosDecimal = jurosAoMes / 100

    const numerator = jurosDecimal
    const denominator = 1 - Math.pow(1 + jurosDecimal, -quantidadeParcelas)

    const monthlyPayment = valorTotal * (numerator / denominator)

    return Math.round(monthlyPayment * 100) / 100
  }
}

import type { Response, NextFunction } from "express"
import { SimulationService } from "../services/simulation.service"
import type { AuthenticatedRequest } from "../interfaces/auth.interface"

export class SimulationController {
  private simulationService = new SimulationService()

  public createSimulation = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const studentId = req.user!.id
      const { valor_total, quantidade_parcelas, juros_ao_mes } = req.body

      const simulation = await this.simulationService.createSimulation({
        id_estudante: studentId,
        valor_total,
        quantidade_parcelas,
        juros_ao_mes,
      })

      return res.status(201).json({
        success: true,
        message: "Simulação criada com sucesso",
        data: simulation,
      })
    } catch (error) {
      next(error)
    }
  }

  public getSimulations = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const studentId = req.user!.id

      const simulations = await this.simulationService.getSimulationsByStudentId(studentId)

      return res.status(200).json({
        success: true,
        data: simulations,
      })
    } catch (error) {
      next(error)
    }
  }
}

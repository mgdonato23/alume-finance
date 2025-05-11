import api from "./api"
import type { Simulation, SimulationInput } from "../types/simulation"

export const simulationService = {
  createSimulation: async (data: SimulationInput): Promise<Simulation> => {
    const response = await api.post("/simulations", data)
    return response.data.data
  },

  getSimulations: async (): Promise<Simulation[]> => {
    const response = await api.get("/simulations")
    return response.data.data
  },
}

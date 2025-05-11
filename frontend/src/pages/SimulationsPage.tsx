"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { simulationService } from "../services/simulation.service"
import type { Simulation } from "../types/simulation"
import toast from "react-hot-toast"
import { formatCurrency } from "../utils/format"

const SimulationsPage = () => {
  const [simulations, setSimulations] = useState<Simulation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const data = await simulationService.getSimulations()
        setSimulations(data)
      } catch (error) {
        toast.error("Erro ao carregar simulações")
      } finally {
        setLoading(false)
      }
    }

    fetchSimulations()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Carregando simulações...</p>
      </div>
    )
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Minhas Simulações</h2>
        <Link
          to="/simulations/new"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Nova Simulação
        </Link>
      </div>

      {simulations.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Você ainda não possui simulações.</p>
          <Link
            to="/simulations/new"
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Criar Primeira Simulação
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parcelas
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Juros ao Mês
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor da Parcela
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data da Simulação
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {simulations.map((simulation) => (
                <tr key={simulation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{formatCurrency(simulation.valor_total)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{simulation.quantidade_parcelas}x</td>
                  <td className="px-6 py-4 whitespace-nowrap">{simulation.juros_ao_mes}%</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {formatCurrency(simulation.valor_parcela_mensal)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(simulation.createdAt).toLocaleDateString("pt-BR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default SimulationsPage

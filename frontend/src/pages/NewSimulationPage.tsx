"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { simulationService } from "../services/simulation.service"
import toast from "react-hot-toast"
import { formatCurrency } from "../utils/format"

const NewSimulationPage = () => {
  const [formData, setFormData] = useState({
    valor_total: "",
    quantidade_parcelas: "",
    juros_ao_mes: "",
  })

  const [result, setResult] = useState<{
    valor_parcela_mensal: number
  } | null>(null)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const valor_total = Number.parseFloat(formData.valor_total)
    const quantidade_parcelas = Number.parseInt(formData.quantidade_parcelas)
    const juros_ao_mes = Number.parseFloat(formData.juros_ao_mes)

    if (isNaN(valor_total) || isNaN(quantidade_parcelas) || isNaN(juros_ao_mes)) {
      toast.error("Preencha todos os campos corretamente")
      return
    }

    if (valor_total <= 0 || quantidade_parcelas <= 0 || juros_ao_mes <= 0) {
      toast.error("Os valores devem ser maiores que zero")
      return
    }

    setLoading(true)

    try {
      const simulation = await simulationService.createSimulation({
        valor_total,
        quantidade_parcelas,
        juros_ao_mes,
      })

      setResult(simulation)
      toast.success("Simulação realizada com sucesso!")
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Erro ao realizar simulação")
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    toast.success("Simulação salva com sucesso!")
    navigate("/simulations")
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Nova Simulação de Financiamento</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label htmlFor="valor_total" className="block text-sm font-medium text-gray-700 mb-1">
              Valor Total (R$)
            </label>
            <input
              type="number"
              id="valor_total"
              name="valor_total"
              value={formData.valor_total}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ex: 50000"
              required
              min="1"
              step="0.01"
            />
          </div>

          <div>
            <label htmlFor="quantidade_parcelas" className="block text-sm font-medium text-gray-700 mb-1">
              Quantidade de Parcelas
            </label>
            <input
              type="number"
              id="quantidade_parcelas"
              name="quantidade_parcelas"
              value={formData.quantidade_parcelas}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ex: 60"
              required
              min="1"
              step="1"
            />
          </div>

          <div>
            <label htmlFor="juros_ao_mes" className="block text-sm font-medium text-gray-700 mb-1">
              Juros ao Mês (%)
            </label>
            <input
              type="number"
              id="juros_ao_mes"
              name="juros_ao_mes"
              value={formData.juros_ao_mes}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Ex: 1.5"
              required
              min="0.01"
              step="0.01"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
          >
            {loading ? "Calculando..." : "Calcular Parcela"}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Resultado da Simulação</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Valor Total do Financiamento</p>
              <p className="text-lg font-medium">{formatCurrency(Number.parseFloat(formData.valor_total))}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Quantidade de Parcelas</p>
              <p className="text-lg font-medium">{formData.quantidade_parcelas}x</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Taxa de Juros ao Mês</p>
              <p className="text-lg font-medium">{formData.juros_ao_mes}%</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Valor da Parcela Mensal</p>
              <p className="text-xl font-bold text-indigo-600">{formatCurrency(result.valor_parcela_mensal)}</p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Salvar Simulação
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewSimulationPage

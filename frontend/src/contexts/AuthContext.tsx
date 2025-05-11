"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import api from "../services/api"
import type { Student } from "../types/student"

interface AuthContextData {
  isAuthenticated: boolean
  loading: boolean
  student: Student | null
  login: (email: string, password: string) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  updateProfile: (data: UpdateProfileData) => Promise<void>
}

interface RegisterData {
  nome: string
  sobrenome: string
  email: string
  senha: string
}

interface UpdateProfileData {
  nome?: string
  sobrenome?: string
  email?: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStoredAuth = async () => {
      const storedToken = localStorage.getItem("@AlumeFinance:token")

      if (storedToken) {
        api.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`

        try {
          const response = await api.post("/me")
          setStudent(response.data.data)
        } catch (error) {
          // Token might be expired or invalid
          localStorage.removeItem("@AlumeFinance:token")
          api.defaults.headers.common["Authorization"] = ""
        }
      }

      setLoading(false)
    }

    loadStoredAuth()
  }, [])

  const login = async (email: string, senha: string) => {
    const response = await api.post("/login", { email, senha })

    const { token, student } = response.data.data

    localStorage.setItem("@AlumeFinance:token", token)
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`

    setStudent(student)
  }

  const register = async (data: RegisterData) => {
    await api.post("/register", data)
  }

  const logout = () => {
    localStorage.removeItem("@AlumeFinance:token")
    api.defaults.headers.common["Authorization"] = ""
    setStudent(null)
  }

  const updateProfile = async (data: UpdateProfileData) => {
    const response = await api.put("/me", data)
    setStudent(response.data.data)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!student,
        loading,
        student,
        login,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

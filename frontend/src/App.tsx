"use client"

import type React from "react"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import SimulationsPage from "./pages/SimulationsPage"
import NewSimulationPage from "./pages/NewSimulationPage"
import Layout from "./components/Layout"

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/profile" />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="simulations" element={<SimulationsPage />} />
            <Route path="simulations/new" element={<NewSimulationPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

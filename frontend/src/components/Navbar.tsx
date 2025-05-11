"use client"

import { useAuth } from "../contexts/AuthContext"

const Navbar = () => {
  const { student, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">Alume Finance</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-700">
            Olá, <span className="font-medium">{student?.nome}</span>
          </div>
          <button onClick={logout} className="text-sm text-red-600 hover:text-red-800">
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar

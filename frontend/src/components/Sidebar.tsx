import { NavLink } from "react-router-dom"
import { UserCircle, Calculator } from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-xl font-bold">Alume Finance</h2>
        <p className="text-xs text-gray-400 mt-1">Sistema de Financiamento Estudantil</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
              }
            >
              <UserCircle className="w-5 h-5 mr-3" />
              <span>Meu Perfil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/simulations"
              className={({ isActive }) =>
                `flex items-center p-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
              }
            >
              <Calculator className="w-5 h-5 mr-3" />
              <span>Simulações</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4 text-xs text-gray-400 border-t border-gray-700">
        <p>© 2025 - Matheus Donato</p>
      </div>
    </aside>
  )
}

export default Sidebar

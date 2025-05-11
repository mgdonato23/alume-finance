import axios from "axios"
import toast from "react-hot-toast"

const api = axios.create({
  baseURL: "http://localhost:3001/api",
})

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration
    if (error.response?.status === 401) {
      const isTokenExpired = error.response.data.message === "Token de autenticação expirado"

      if (isTokenExpired) {
        localStorage.removeItem("@AlumeFinance:token")
        toast.error("Sua sessão expirou. Por favor, faça login novamente.")
        window.location.href = "/login"
      }
    }

    return Promise.reject(error)
  },
)

export default api

import type { Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "../utils/app-error"
import type { AuthenticatedRequest } from "../interfaces/auth.interface"

export const authenticate = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError("Token de autenticação não fornecido", 401)
    }

    const token = authHeader.split(" ")[1]

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret") as { id: string }

      req.user = { id: decoded.id }
      next()
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new AppError("Token de autenticação expirado", 401)
      }
      throw new AppError("Token de autenticação inválido", 401)
    }
  } catch (error) {
    next(error)
  }
}

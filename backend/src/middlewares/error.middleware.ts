import type { Request, Response, NextFunction } from "express"
import { AppError } from "../utils/app-error"

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err)

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    })
  }

  return res.status(500).json({
    success: false,
    message: "Erro interno do servidor",
  })
}

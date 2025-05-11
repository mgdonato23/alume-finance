import type { Request, Response, NextFunction } from "express"
import { type AnyZodObject, ZodError } from "zod"
import { AppError } from "../utils/app-error"

export const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      })
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }))

        next(new AppError("Erro de validação", 400, formattedErrors))
      } else {
        next(error)
      }
    }
  }
}

import type { Request, Response, NextFunction } from "express"
import { AuthService } from "../services/auth.service"

export class AuthController {
  private authService = new AuthService()

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { nome, sobrenome, email, senha } = req.body

      const result = await this.authService.register({
        nome,
        sobrenome,
        email,
        senha,
      })

      return res.status(201).json({
        success: true,
        message: "Estudante registrado com sucesso",
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, senha } = req.body

      const result = await this.authService.login(email, senha)

      return res.status(200).json({
        success: true,
        message: "Login realizado com sucesso",
        data: result,
      })
    } catch (error) {
      next(error)
    }
  }
}

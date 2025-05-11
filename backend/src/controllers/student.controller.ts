import type { Response, NextFunction } from "express"
import { StudentService } from "../services/student.service"
import type { AuthenticatedRequest } from "../interfaces/auth.interface"

export class StudentController {
  private studentService = new StudentService()

  public getProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const studentId = req.user!.id

      const student = await this.studentService.getStudentById(studentId)

      return res.status(200).json({
        success: true,
        data: student,
      })
    } catch (error) {
      next(error)
    }
  }

  public updateProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const studentId = req.user!.id
      const { nome, sobrenome, email } = req.body

      const updatedStudent = await this.studentService.updateStudent(studentId, {
        nome,
        sobrenome,
        email,
      })

      return res.status(200).json({
        success: true,
        message: "Perfil atualizado com sucesso",
        data: updatedStudent,
      })
    } catch (error) {
      next(error)
    }
  }
}

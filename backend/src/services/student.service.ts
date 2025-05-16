import { prisma } from "../server"
import { AppError } from "../utils/app-error"

export class StudentService {
  public async getStudentById(id: string) {
    const student = await prisma.estudante.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        senha: false,
      },
    })

    if (!student) {
      throw new AppError("Estudante não encontrado", 404)
    }

    return student
  }

  public async updateStudent(
    id: string,
    data: {
      nome?: string
      sobrenome?: string
      email?: string
    },
  ) {
    if (data.email) {
      const existingStudent = await prisma.estudante.findFirst({
        where: {
          email: data.email,
          id: { not: id },
        },
      })

      if (existingStudent) {
        throw new AppError("Email já está em uso", 400)
      }
    }

    const updatedStudent = await prisma.estudante.update({
      where: { id },
      data,
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        senha: false,
      },
    })

    return updatedStudent
  }
}

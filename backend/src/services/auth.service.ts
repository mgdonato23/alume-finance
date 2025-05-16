import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { prisma } from "../server"
import { AppError } from "../utils/app-error"

export class AuthService {
  public async register(data: {
    nome: string
    sobrenome: string
    email: string
    senha: string
  }) {
    const existingStudent = await prisma.estudante.findUnique({
      where: { email: data.email },
    })

    if (existingStudent) {
      throw new AppError("Email já está em uso", 400)
    }

    const hashedPassword = await bcrypt.hash(data.senha, 10)

    const student = await prisma.estudante.create({
      data: {
        nome: data.nome,
        sobrenome: data.sobrenome,
        email: data.email,
        senha: hashedPassword,
      },
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        senha: false,
      },
    })

    return student
  }

  public async login(email: string, senha: string) {
    const student = await prisma.estudante.findUnique({
      where: { email },
    })

    if (!student) {
      throw new AppError("Credenciais inválidas", 401)
    }

    const isPasswordValid = await bcrypt.compare(senha, student.senha)

    if (!isPasswordValid) {
      throw new AppError("Credenciais inválidas", 401)
    }

    const token = jwt.sign({ id: student.id }, process.env.JWT_SECRET || "default_secret", { expiresIn: "5m" })

    return {
      token,
      student: {
        id: student.id,
        nome: student.nome,
        sobrenome: student.sobrenome,
        email: student.email,
      },
    }
  }
}

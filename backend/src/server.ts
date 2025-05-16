import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import authRoutes from "./routes/auth.routes"
import studentRoutes from "./routes/student.routes"
import simulationRoutes from "./routes/simulation.routes"
import { errorHandler } from "./middlewares/error.middleware"
import { setupSwagger } from "./swagger"

dotenv.config()

const app = express()
const prisma = new PrismaClient()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use("/api", authRoutes)
app.use("/api", studentRoutes)
app.use("/api", simulationRoutes)

app.use(errorHandler)

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" })
})

const startServer = async () => {
  try {
    await prisma.$connect()
    console.log("Connected to database")

    setupSwagger(app);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("Failed to start server:", error)
    await prisma.$disconnect()
    process.exit(1)
  }
}

startServer()

process.on("SIGINT", async () => {
  await prisma.$disconnect()
  process.exit(0)
})

export { prisma }

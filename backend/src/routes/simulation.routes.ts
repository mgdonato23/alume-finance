import { Router } from "express";
import { SimulationController } from "../controllers/simulation.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { validateRequest } from "../middlewares/validation.middleware";
import { createSimulationSchema } from "../schemas/simulation.schema";

const router = Router();
const simulationController = new SimulationController();

/**
 * @swagger
 * tags:
 *   name: Simulations
 *   description: Endpoints relacionados às simulações
 */

/**
 * @swagger
 * /simulations:
 *   post:
 *     summary: Criar uma nova simulação
 *     tags: [Simulations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSimulation'
 *     responses:
 *       201:
 *         description: Simulação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
router.post(
  "/simulations",
  authenticate,
  validateRequest(createSimulationSchema),
  simulationController.createSimulation,
);

/**
 * @swagger
 * /simulations:
 *   get:
 *     summary: Obter todas as simulações do usuário autenticado
 *     tags: [Simulations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de simulações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *       401:
 *         description: Não autorizado
 */
router.get("/simulations", authenticate, simulationController.getSimulations);

export default router;

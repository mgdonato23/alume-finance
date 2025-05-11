import { Router } from "express";
import { StudentController } from "../controllers/student.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { validateRequest } from "../middlewares/validation.middleware";
import { updateStudentSchema } from "../schemas/student.schema";

const router = Router();
const studentController = new StudentController();

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Endpoints relacionados aos estudantes
 */

/**
 * @swagger
 * /students/profile:
 *   post:
 *     summary: Obter o perfil do estudante
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil do estudante retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *       401:
 *         description: Não autorizado
 */
router.post("/me", authenticate, studentController.getProfile);

/**
 * @swagger
 * /students/update:
 *   put:
 *     summary: Atualizar o perfil do estudante
 *     tags: [Students]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *       401:
 *         description: Não autorizado
 */
router.put("/me", authenticate, validateRequest(updateStudentSchema), studentController.updateProfile)

export default router;

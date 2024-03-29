import { Router } from 'express'
import { AuthController } from '../controllers/auth.js'
export const routerAuth = Router()

routerAuth.get('/', AuthController.getAll)

import { Router } from 'express'
import { MoviesController } from '../controllers/movies.controller.js'
export const routerMovies = Router()

routerMovies.get('/:id', MoviesController.findById)
routerMovies.get('/', MoviesController.getAll)

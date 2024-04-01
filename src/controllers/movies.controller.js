import { MoviesModel } from '../models/movies.model.js'
import { validateMovie } from '../schemas/movies.schemas.js'
import boom from '@hapi/boom'
export class MoviesController {
  static getAll = async (req, res, next) => {
    try {
      const { genre } = req.query
      console.log('mi genre:', genre)
      const movies = await MoviesModel.getAll({ genre })
      res.json(movies)
    } catch (error) {
      next(error)
    }
  }

  static findById = async (req, res, next) => {
    try {
      const { id } = req.params
      const movie = await MoviesModel.findById({ id })
      res.json(movie)
    } catch (error) {
      next(error)
    }
  }

  static createMovie = async (req, res, next) => {
    try {
      const bodyValidate = validateMovie(req.body)
      if (bodyValidate.error) {
        throw boom.conflict(bodyValidate.error)
      }
      const movie = bodyValidate.data
      const response = await MoviesModel.createMovie({ movie })
      res.json(response)
    } catch (error) {
      next(error)
    }
  }

  static updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params
      const bodyValidate = validateMovie(req.body)
      if (bodyValidate.error) {
        throw boom.conflict(bodyValidate.error)
      }
      const movie = await MoviesModel.updateMovie({ id, bodyValidate })
      res.json(movie)
    } catch (err) {
      next(err)
    }
  }
}

import { MoviesModel } from '../models/movies.model.js'

export class MoviesController {
  static getAll = async (req, res, next) => {
    try {
      const { genre } = req.query
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
}

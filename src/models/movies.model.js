import { readJson } from '../util.js'
const movies = readJson('./movies.json')
export class MoviesModel {
  static getAll = async ({ genre }) => {
    try {
      if (genre) {
        return movies.filter((movie) =>
          movie.nickname.some((g) => g.toLowerCase() === movie.toLowerCase())
        )
      }
      return movies
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static findById = async ({ id }) => {
    try {
      console.log('id pelicula:', id)
      const movie = movies.find((movie) => movie.id === id)
      if (!movie) {
        throw new Error('Movie not found')
      }
      return movie
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

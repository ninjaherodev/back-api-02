import { readJson } from '../util.js'
import { randomUUID } from 'node:crypto'
import boom from '@hapi/boom'

const movies = readJson('./movies.json')

export class MoviesModel {
  static getAll = async ({ genre }) => {
    try {
      if (genre) {
        return movies.filter(
          (movie) =>
            movie.genre &&
            movie.genre.some(
              (genero) => genero.toLowerCase() === genre.toLowerCase()
            )
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
      const movie = movies.find((movie) => movie.id === id)
      if (!movie) {
        throw boom.notFound('Movie not found')
      }
      return movie
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static createMovie = async ({ movie }) => {
    try {
      console.log('new movie:', movie)
      const newMovie = {
        id: randomUUID(),
        ...movie
      }
      movies.push(newMovie)
      return newMovie
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  static updateMovie = async ({ id, bodyValidate }) => {
    try {
      const moviIndex = movies.findIndex((movie) => movie.id === id)

      if (moviIndex === -1) {
        throw boom.notFound('Movie not found')
      }
      const updateMovie = {
        ...movies[moviIndex],
        ...bodyValidate
      }
      movies[moviIndex] = updateMovie
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

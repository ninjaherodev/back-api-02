import z from 'zod'

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Titulo debe ser un string.',
    required_error: 'Titulo es requerido.'
  }),
  year: z.number().int().min(1900).max(2050),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'Poster debe ser una URL.'
  }),
  genre: z.array(
    z.enum([
      'Drama',
      'Crime',
      'Action',
      'Biography',
      'History',
      'Adventure',
      'Fantasy',
      'Romance',
      'Sci-Fi',
      'Thriller',
      'Mystery',
      'Animation',
      'War',
      'Comedy',
      'Adult'
    ])
  )
})

export const validateMovie = (object) => {
  return movieSchema.safeParse(object)
}

export const validatePartialMovie = (object) => {
  return movieSchema.partial().safeParse(object)
}

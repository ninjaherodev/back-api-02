import { ZodError } from 'zod'

// export const zodErrorHandler = (err, req, res, next) => {
//   if (err instanceof ZodError) {

//   }
//   else {
//     next(err)
//   }
// }
export const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}
export const errorHandler = (err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack })
}

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    if (err instanceof ZodError) {
      output.payload.message = err.errors
    }
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}
// export const errorHandler = (err, req, res, next) => {
//   console.error(err) // Registrar el error en la consola para propósitos de depuración

//   let statusCode = 500
//   let errorMessage = 'Internal server error'
//   if (err instanceof ZodError) {
//     console.log('entro a ZodError===>', err)
//     statusCode = 400
//     errorMessage = 'Validation error'
//     // Enviar la lista de errores en la respuesta JSON
//     res.status(statusCode).json({ errors: err.errors })
//     return
//   }
//   // Verificar si el error es de tipo Error y tiene un mensaje
//   if (err instanceof Error && err.message) {
//     if (err.name === 'ValidationError') {
//       statusCode = 400
//       errorMessage = err.message
//     } else if (err.name === 'UnauthorizedError') {
//       statusCode = 403
//       errorMessage = 'Unauthorized'
//     } else if (err.name === 'NotFoundError') {
//       statusCode = 404
//       errorMessage = 'Not found'
//     } else {
//       errorMessage = err.message
//     }
//   }

//   // Responder con el código de estado y el mensaje de error
//   res.status(statusCode).json({ error: errorMessage })
// }

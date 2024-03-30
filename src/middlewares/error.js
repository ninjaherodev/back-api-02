export const errorHandler = (err, req, res, next) => {
  console.error(err) // Registrar el error en la consola para propósitos de depuración

  let statusCode = 500
  let errorMessage = 'Internal server error'

  // Verificar si el error es de tipo Error y tiene un mensaje
  if (err instanceof Error && err.message) {
    if (err.name === 'ValidationError') {
      statusCode = 400
      errorMessage = err.message
    } else if (err.name === 'UnauthorizedError') {
      statusCode = 403
      errorMessage = 'Unauthorized'
    } else if (err.name === 'NotFoundError') {
      statusCode = 404
      errorMessage = 'Not found'
    } else {
      errorMessage = err.message
    }
  }

  // Responder con el código de estado y el mensaje de error
  res.status(statusCode).json({ error: errorMessage })
}

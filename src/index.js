import express from 'express'
import { routerMovies } from './routes/movies.route.js'
import {
  errorHandler,
  logErrors,
  boomErrorHandler
} from './middlewares/errorHandler.js'
const port = process.env.PORT ?? 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.disable('x-powered-by')
app.use('/movies', routerMovies)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running in htttp://localhost:${port}`)
})

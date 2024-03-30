import express from 'express'
import { routerMovies } from './routes/movies.route.js'
import { errorHandler } from './middlewares/error.js'
const port = process.env.PORT ?? 3000
const app = express()
app.disable('x-powered-by')
app.use('/movies', routerMovies)
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Server running in htttp://localhost:${port}`)
})

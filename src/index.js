import express from 'express'
import { routerAuth } from './routes/auth.js'

const port = process.env.PORT ?? 3000
const app = express()
app.disable('x-powered-by')
app.use('/auth', routerAuth)

app.listen(port, () => {
  console.log(`Server running in htttp://localhost:${port}`)
})

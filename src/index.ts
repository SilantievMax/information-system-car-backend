import express from 'express'
import { routerAuth } from './routes/auth.js'
import { routerCars } from './routes/cars.js'
import { routerOrders } from './routes/order.js'

// App
const app = express()

// Constants
// todo .env
const port = 3000

// Middleware
app.use(express.json())

// Routes
app.use('/api/auth', routerAuth)
app.use('/cars', routerCars)
app.use('/orders', routerOrders)

app.listen(port, () => {
	console.log(`Server OK - PORT ${port}`)
})

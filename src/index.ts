import dotenv from 'dotenv'
import express from 'express'
import { runDb } from './database/db.js'
import { greenLog } from './common/const.js'
import { routerAuth } from './routes/auth.js'
import { routerCars } from './routes/cars.js'
import { routerOrders } from './routes/order.js'

// App
dotenv.config()
const app = express()

// Constants
const port = process.env.PORT || 5000

// Middleware
app.use(express.json())

// Routes
app.use('/api/auth', routerAuth)
app.use('/api/cars', routerCars)
app.use('/api/orders', routerOrders)

const start = async () => {
	await runDb()

	app.listen(port, () => {
		console.log(greenLog, `Server OK - PORT ${port}`)
	})
}

// Запуск приложения
start()

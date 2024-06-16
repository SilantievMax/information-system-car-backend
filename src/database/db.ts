import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { greenLog } from '../common/const.js'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || ''

export const runDb = async () => {
	await mongoose
		.connect(mongoUrl, {})
		.then(() => {
			console.log(greenLog, 'MongoDB OK')
		})
		.catch(err => {
			console.error('MongoDB ERROR', err)
		})
}

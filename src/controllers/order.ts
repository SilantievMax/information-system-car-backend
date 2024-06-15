import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const getOrders = (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getOrder = (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const createOrder = (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const updateOrder = (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const deleteOrder = (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

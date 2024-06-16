import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const getOrders = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getOrder = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const createOrder = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const updateOrder = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const deleteOrder = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

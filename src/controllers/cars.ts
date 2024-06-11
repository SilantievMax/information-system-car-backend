import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const getCars = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getCar = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const createCar = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const updateCar = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const deleteCars = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

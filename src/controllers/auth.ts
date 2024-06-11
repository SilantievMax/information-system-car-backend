import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const registration = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const login = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getMe = (req: Request, res: Response) => {
	try {
		res.status(200).json([])
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

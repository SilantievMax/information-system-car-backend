import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const registration = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const login = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getMe = async (req: Request, res: Response) => {
	try {
		res.status(200)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

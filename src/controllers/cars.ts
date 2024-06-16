import CarsModel from '../models/cars.js'
import { Request, Response } from 'express'
import { errMessage } from '../common/const.js'

export const getCars = async (req: Request, res: Response) => {
	try {
		const cars = await CarsModel.find({})

		res.status(200).json(cars)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const getCar = async (req: Request, res: Response) => {
	try {
		const id = req.params.id

		const car = await CarsModel.findById(id)

		res.status(200).json(car)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const createCar = async (req: Request, res: Response) => {
	try {
		const { body } = req

		const doc = new CarsModel({
			name: body.name,
			carNumber: body.carNumber.toUpperCase()
		})

		const car = await doc.save()

		res.status(200).json(car)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const updateCar = async (req: Request, res: Response) => {
	try {
		const id = req.params.id
		const { body } = req

		const car = await CarsModel.findByIdAndUpdate(
			id,
			{
				name: body.name,
				carNumber: body.carNumber.toUpperCase()
			},
			{ new: true }
		)

		res.status(200).json(car)
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

export const deleteCar = async (req: Request, res: Response) => {
	try {
		const id = req.params.id

		await CarsModel.findByIdAndDelete(id)

		res.status(200).json({ message: 'Car deleted successfully' })
	} catch (err) {
		res.status(404).json({ message: errMessage })
	}
}

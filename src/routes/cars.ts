import { Router } from 'express'
import { createCar, deleteCar, getCar, getCars, updateCar } from '../controllers/cars.js'

const router = Router()

// GET /cars - получает список всех автомобилей.
router.get('/', getCars)

// POST /cars - создает новый автомобиль.
router.post('/', createCar)

// GET /cars/:id - получает информацию об одном автомобиле по идентификатору.
router.get('/:id', getCar)

// PATCH /cars/:id - обновляет информацию об автомобиле.
router.patch('/:id', updateCar)

// DELETE /cars/:id - удаляет автомобиль.
router.delete('/:id', deleteCar)

export { router as routerCars }

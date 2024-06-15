import { Router } from 'express'
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/order.js'

const router = Router()

// GET /orders - получает список всех заказов.
router.get('/', getOrders)

// POST /orders - создает новый заказ.
router.post('/', createOrder)

// GET /orders/:id - получает информацию об одном заказе по идентификатору.
router.get('/:id', getOrder)

// PATCH /orders/:id - обновляет информацию об заказе.
router.patch('/:id', updateOrder)

// DELETE /orders/:id - удаляет заказ.
router.delete('/:id', deleteOrder)

export { router as routerOrders }

import { Router } from 'express'
import { getMe, login, registration } from '../controllers/auth.js'

const router = Router()

// POST /registration - регистрирует нового пользователя, хешируя пароль перед сохранением в базе данных.
router.post('/registration', registration)

// POST /login - аутентифицирует пользователя, проверяя имя пользователя и пароль, и возвращает JWT-токен для дальнейшей аутентификации.
router.post('/login', login)

// GET /me - получает информацию о текущем пользователе, используя JWT-токен, который должен быть передан в заголовке Authorization.
router.get('/me', getMe)

export { router as routerAuth }

import { Router } from "express"
import { getMe } from "../Controllers/auth/getMe.js"
import { login } from "../Controllers/auth/login.js"
import { registrer } from "../Controllers/auth/register.js"
import { checkAuth } from "../utils/checkAuth.js"

const router = new Router()

router.post('/register', registrer)

router.post('/login', login)

router.post('/me', checkAuth, getMe)

export default router
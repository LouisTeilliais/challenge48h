import Router from '@koa/router'
import * as UserControllers from '../user/user-controllers.js'
// import { isAuthenticatedWithUser } from "../../middlewares/jwt-handler.js"

const users = new Router()

users.post('/register', UserControllers.registerClient)
users.post('/registerMerchant', UserControllers.registerMerchant)
users.post('/login', UserControllers.login)
users.get('/', UserControllers.index)
users.get('/:id', UserControllers.id)

export default users
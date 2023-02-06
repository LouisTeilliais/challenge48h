import Router from '@koa/router'
import userRoutes from '#components/user/user-routes.js'

const API_V1_ROUTER = new Router({ prefix: '/api/v1' })
// API_V1_ROUTER.use('/tasks', taskRoutes.routes(), taskRoutes.allowedMethods())
// API_V1_ROUTER.use('/lists', listRoutes.routes(), listRoutes.allowedMethods())
API_V1_ROUTER.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
// API_V1_ROUTER.use('/exemples', exempleRoutes.routes(), exempleRoutes.allowedMethods())

export { API_V1_ROUTER }
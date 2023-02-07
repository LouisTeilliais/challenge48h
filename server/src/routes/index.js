import Router from '@koa/router'
import userRoutes from '../components/user/user-routes.js'
import articleRoutes from '../components/articles/article-routes.js'
const API_ROUTER = new Router({ prefix: '/api' })

API_ROUTER.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
API_ROUTER.use('/articles', articleRoutes.routes(), articleRoutes.allowedMethods())


export { API_ROUTER }
import Router from '@koa/router'
import userRoutes from '../components/user/user-routes.js'
import articleRoutes from '../components/articles/article-routes.js'
import merchantRoutes from '../components/merchants/merchant-routes.js'
import categoryRoutes from '../components/categories/categories-routes.js'

const API_ROUTER = new Router({ prefix: '/api' })

API_ROUTER.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
API_ROUTER.use('/articles', articleRoutes.routes(), articleRoutes.allowedMethods())
API_ROUTER.use('/merchants', merchantRoutes.routes(), merchantRoutes.allowedMethods())
API_ROUTER.use('/category', categoryRoutes.routes(), categoryRoutes.allowedMethods())


export { API_ROUTER }

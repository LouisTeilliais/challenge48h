import Router from '@koa/router'
import * as ArticleController from './article-controllers.js'
// import { isAuthenticatedWithUser } from "../../middlewares/jwt-handler.js"

const articles = new Router()

articles.get('/', ArticleController.index)
articles.post('/', ArticleController.create)
articles.delete('/:id', ArticleController.destroy)

export default articles
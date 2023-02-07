import Router from '@koa/router'
import * as categoriesArticleControllers from './categories_article-controllers.js'


const categoriesArticle = new Router()

categoriesArticle.get('/description', categoriesArticleControllers.description)
categoriesArticle.get('/name', categoriesArticleControllers.name)
categoriesArticle.get('/', categoriesArticleControllers.index)
categoriesArticle.get('/:id', categoriesArticleControllers.id)

export default categoriesArticle

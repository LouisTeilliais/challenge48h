import Router from '@koa/router'
import * as categoriesControllers from './categories-controllers.js'


const categories = new Router()

categories.get('/', categoriesControllers.index)
categories.get('/:id', categoriesControllers.id)
categories.post('/', categoriesControllers.create)

export default categories

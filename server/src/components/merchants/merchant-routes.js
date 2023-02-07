import Router from '@koa/router'
import * as MerchantsControllers from './merchant-controllers.js'

const merchants = new Router()

merchants.get('/', MerchantsControllers.index)
merchants.post('/', MerchantsControllers.create)
merchants.get('/:id', MerchantsControllers.id)
merchants.get('/users/:userId', MerchantsControllers.getAllByUser)


export default merchants
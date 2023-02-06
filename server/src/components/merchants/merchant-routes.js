
import Router from '@koa/router'
import * as MerchantsControllers from '#components/Merchant/merchant-controllers.js'

const merchants = new Router()

merchants.get('/', MerchantsControllers.index)
merchants.get('/:id', MerchantsControllers.id)
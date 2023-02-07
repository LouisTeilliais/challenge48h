import '#config/database.js'
import Koa from 'koa'
import cors from '@koa/cors'
import respond from 'koa-respond'
import bodyParser from 'koa-bodyparser'
import { API_ROUTER } from '#routes/index.js'
// import errorhandler from '..middlewares/error-handler'

const app = new Koa()

app
  .use(cors('*'))
  .use(bodyParser())
  .use(respond())
  .use(API_ROUTER.routes())
  .use(API_ROUTER.allowedMethods())

app.listen(process.env.PORT, () => console.log(`server listening to port: ${process.env.PORT}`))


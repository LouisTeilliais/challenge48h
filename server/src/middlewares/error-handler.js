import { logger } from '#config/winston.js'

const errorhandler = async (ctx, next) => {

  try {
    await next()
  } catch (error) {
    logger.error('', { err: error.stack, request: ctx.request })
  }
}

export default errorhandler
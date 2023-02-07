import MerchantsModel from './merchant-model.js'
import Joi from 'joi'


export async function index(ctx) {
  try {
    const merchant = await MerchantsModel.find({})
    ctx.ok(merchant)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id(ctx) {
  try {
    if (!ctx.params.id) throw new Error('No id supplied')
    const merchant = await MerchantsModel.findById(ctx.params.id)
    if (!user) { return ctx.notFound() }
    ctx.ok(merchant)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function getAllByUser(ctx) {
  try {
    if (!ctx.params.userId) throw new Error('No id supplied')
    const merchants = await MerchantsModel.findByUserId(ctx.params.userId)
    ctx.ok(merchants)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create(ctx) {
  try {
    const merchantValidationSchema = Joi.object({
      name: Joi.string().required(),
      logo: Joi.string().required(),
      user: Joi.string().required()
    })
    const { error, value } = merchantValidationSchema.validate(ctx.request.body)
    if (error) {
      throw new Error(error)
    }
    const newMerchant = await MerchantsModel.create({ ...value })
    ctx.ok(newMerchant)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}


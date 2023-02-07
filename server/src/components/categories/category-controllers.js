import CategoryModel from './category-model.js'
import Joi from 'joi'


export async function index(ctx) {
  try {
    const categoriesArticle = await CategoryModel.find({})
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id(ctx) {
  try {
    if (!ctx.params.id) throw new Error('No id supplied')
    const categoriesArticle = await CategoryModel.findById(ctx.params.id)
    if (!categoriesArticle) { return ctx.notFound() }
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create(ctx) {
  try {
    const categoryValidationSchema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
    })
    const { error, value } = categoryValidationSchema.validate(ctx.request.body)
    if (error) {
      throw new Error(error)
    }
    const newCategory = await CategoryModel.create({ ...value })
    ctx.ok(newCategory)

  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

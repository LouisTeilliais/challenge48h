import ArticleModel from './article-model.js';
import Joi from 'Joi'


export async function index(ctx) {
  try {
    const articles = await ArticleModel.find({})
    ctx.ok(articles)
  } catch (error) {
    console.log(error)
    ctx.badRequest({ message: error.message })
  }
}

export async function getAllByCategory(ctx) {
  try {
    if (!ctx.params.id) throw new Error('No id supplied')
    const articles = await ArticleModel.findByCategory(ctx.params.id)
    ctx.ok(articles)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create(ctx) {
  try {
    const articleValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      stock: Joi.number().required(),
      image: Joi.string().required(),
      merchant: Joi.string().required(),
      category: Joi.string().required()
    })
    const { error, value } = articleValidationSchema.validate(ctx.request.body)
    if (error) {
      throw new Error(error)
    }
    const newArticle = await ArticleModel.create({ ...value })
    ctx.ok(newArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function destroy(ctx) {
  try {
    if (!ctx.params.id) throw new Error('No id supplied')
    const articleToDelete = await ArticleModel.findOneAndDelete(ctx.params.id)
    if (!articleToDelete) {
      return ctx.send(401)
    }
    ctx.ok('The article has been deleted successfully')
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}
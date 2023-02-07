import categoriesArticleModel from '#components/categories_article/categories_article-model.js'


export async function index(ctx) {
  try {
    const categoriesArticle = await categoriesArticleModel.find({})
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id(ctx) {
  try {
    if (!ctx.params.id) throw new Error('No id supplied')
    const categoriesArticle = await categoriesArticleModel.findById(ctx.params.id)
    if (!categoriesArticle) { return ctx.notFound() }
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function name(ctx) {
  try {
    const categoriesArticle = await categoriesArticleModel.find({name})
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function description(ctx) {
  try {
    const categoriesArticle = await categoriesArticleModel.find({description})
    ctx.ok(categoriesArticle)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}
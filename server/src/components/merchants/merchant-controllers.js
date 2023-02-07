import MerchantsModel from '#components/user/merchant-model.js'


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
        const merchant = await merchantModel.findById(ctx.params.id)
        if (!user) { return ctx.notFound() }
        ctx.ok(merchant)
    } catch (e) {
        ctx.badRequest({ message: e.message })
    }
}

export async function name(ctx) {
    try {
        const merchant = await merchantModel.find({name})
        ctx.ok(merchant)
    } catch (e) {
        ctx.badRequest({message: e.message})
    }
}

export async function logo(ctx) {
    try {
        const merchant = await merchantModel.find({logo})
        ctx.ok(merchant)
    } catch (e) {
        ctx.badRequest({message : e.message})
    }


}
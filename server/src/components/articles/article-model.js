import mongoose from 'mongoose'

const { Schema } = mongoose

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Merchant'
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}, {
  timestamps: true
})

articlesSchema.static({
  findByCategory(categoryId) {
    return this.find({ category: categoryId })
  },
})


const ArticleModel = mongoose.model('Article', articlesSchema)

export default ArticleModel